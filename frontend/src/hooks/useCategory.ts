import { useState, useEffect, use } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get("category_id")) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.id === Number(params.get("category_id")),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((rawCategory) => {
      if (!rawCategory) return;

      // 백엔드에서 오는 필드명을 프론트에서 사용하는 구조로 바꿔주기
      const converted = rawCategory.map((item: any) => ({
        id: item.category_id,
        name: item.category_name,
      }));

      const categoryWithAll = [
        {
          id: null,
          name: "전체",
        },
        ...converted,
      ];

      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
