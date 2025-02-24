import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = process.env.BASE_URL + `/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("서버 상태가 이상합니다.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
