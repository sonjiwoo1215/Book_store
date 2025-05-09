import { Order, OrderDetailItem, OrderListItem, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

// export const order = async (orderData: OrderSheet)=> {
//     const response = await httpClient.post("/orders",orderData);
//     return response.data;
// }

export const order = async (orderData: OrderSheet)=> {
    return await requestHandler<OrderSheet>("post", "/orders", orderData);
}


// export const fetchOrders = async () => {
//     return await requestHandler("get", "/orders");
// }

export const fetchOrders = async () => {
    const response = await requestHandler("get", "/orders");
  
    // snake_case -> camelCase 수동 매핑
    const camelized = response.map((order: any) => ({
      id: order.id,
      createdAt: order.created_at,
      address: order.address,
      receiver: order.receiver,
      contact: order.contact,
      bookTitle: order.book_title,
      totalQuantity: order.total_quantity,
      totalPrice: order.total_price,
    }));
  
    return camelized;
  };
  

export const fetchOrder = async (orderId: number) => {
    return await requestHandler("get", `/orders/${orderId}`);
}

// export const fetchOrder = async (orderId: number) => {
//     const response = await requestHandler("get", `/orders/${orderId}`);
//     console.log("주문 상세 응답:", response); // 응답 내용 확인
  
//     // 응답이 객체라면, data 속성을 확인
//     const orderData = response.data || response;  // 응답이 배열이 아니면 .data를 확인
  
//     // 예외 처리: 응답이 유효한 배열인지 확인
//     if (!orderData || !Array.isArray(orderData) || orderData.length === 0) {
//       console.warn(`orderId ${orderId}에 대한 상세 데이터가 없습니다.`);
//       return []; // 비어 있는 detail 반환
//     }
  
//     const detail = orderData.map((item: any) => ({
//       bookId: item.book_id,
//       title: item.title,
//       author: item.author,
//       price: item.price,
//       quantity: item.quantity,
//     }));
  
//     return detail;
//   };
  