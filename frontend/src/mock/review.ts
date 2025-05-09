// import { BookReviewItem } from "@/models/book.model";
// import { http, HttpResponse } from "msw";
// import { fakerKO as faker } from "@faker-js/faker";

// // mockReviewData 생성
// const mockReviewData: BookReviewItem[] = Array.from({
//   length: 8,
// }).map((_, index) => ({
//   id: index,
//   userName: `${faker.person.lastName()}$${faker.person.firstName()}`,
//   content: faker.lorem.paragraph(),
//   createdAt: faker.date.past().toISOString(),
//   score: faker.number.int({ min: 1, max: 5 }),  // 수정된 부분
// }));

// export const reviewsById = http.get(
//   "http://localhost:9999/reviews/:bookId",
//   () => {
//     const data: BookReviewItem[] = [];
//     return HttpResponse.json(data, {
//       status: 200,
//     });
//   }
// );

// export const addReview = http.post(
//   "http://localhost:9999/reviews/:bookId",
//   () => {
//     return HttpResponse.json(
//       {
//         message: "리뷰가 등록되었습니다.",
//       },
//       {
//         status: 200,
//       }
//     );
//   }
// );

// export const reviewForMain = http.get("http://localhost:9999/reviews", () => {
//   return HttpResponse.json(mockReviewData, {
//     status: 200,
//   });
// });


export {}; // ✅ 이 줄이 있으면 모듈로 인식됨
