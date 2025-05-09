import dayjs from "dayjs";

// export const formatNumber = (number: number) : string => {
//     return number.toLocaleString();
// }

export function formatNumber(value: number | undefined | null) {
    return value != null ? value.toLocaleString() : "0";
  }
  

export const formatDate = (date: string, format?: string) => {
    return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
}