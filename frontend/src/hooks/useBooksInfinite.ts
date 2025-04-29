import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";
import { useInfiniteQuery } from "@tanstack/react-query";

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const useBooksInfinite = () => {
  const location = useLocation();

  const getBooks = async (pageParam: number): Promise<FetchBooksResponse> => {
    const params = new URLSearchParams(location.search);
    const category_id = params.get(QUERYSTRING.CATEGORY_ID)
      ? Number(params.get(QUERYSTRING.CATEGORY_ID))
      : undefined;

    const news = params.get(QUERYSTRING.NEWS) ? true : undefined;
    const limit = LIMIT;
    const currentPage = pageParam;

    return fetchBooks({
      category_id,
      news,
      limit,
      currentPage,
    });
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<FetchBooksResponse>({
    queryKey: ["books", location.search],
    queryFn: ({ pageParam = 1 }) => getBooks(Number(pageParam)), // ★ 여기 Number로 명확히 변환
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.pagination.totalCount / LIMIT) ===
        lastPage.pagination.currentPage;

      return isLastPage ? undefined : lastPage.pagination.currentPage + 1;
    },
    initialPageParam: 1,
  });

  const books = data ? data.pages.flatMap((page) => page.books) : [];
  const pagination = data ? data.pages[data.pages.length - 1].pagination : undefined;
  const isEmpty = books.length === 0;

  return {
    books,
    pagination,
    isEmpty,
    isBooksLoading: isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
