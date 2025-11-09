import Cookies from "js-cookie";
import { TOKEN } from "@/app/_util/Constants";
import { apis } from "../apis";
import { cookies } from "next/headers";

export const GetTodo = async ({ id }) => {
  const cookieStore = cookies();

  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${apis.todos}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(await cookieStore).get(TOKEN)?.value}`,
        },
      }
    );
    return await req.json();
  } catch (error) {
    console.error(error);
  }
};
