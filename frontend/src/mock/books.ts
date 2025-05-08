import { Book } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import {fakerKO as faker} from "@faker-js/faker";

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const bestBooksData: Book[] = Array.from({ length: 10 }).map((item, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    img: getRandomNumber(100, 200),  
    category_id: getRandomNumber(0, 2), 
    form: "종이책",
    isbn: faker.commerce.isbn(),
    summary: faker.lorem.paragraph(),
    detail: faker.lorem.paragraph(),
    author: faker.person.firstName(),
    pages: getRandomNumber(100, 500),  
    contents: faker.lorem.paragraph(),
    price: getRandomNumber(10000, 50000),  
    likes: getRandomNumber(0, 100),  
    pubDate: faker.date.past().toISOString(),
  }));
  

export const bestBooks = http.get("http://localhost:9999/books/best", ()=>{
    return HttpResponse.json(bestBooksData, {
        status: 200,
    })
})