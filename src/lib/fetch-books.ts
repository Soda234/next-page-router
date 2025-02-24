import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = process.env.BASE_URL + "/book";

  if (q) {
    url = process.env.BASE_URL + `/book/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("서버 상태가 이상합니다.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
