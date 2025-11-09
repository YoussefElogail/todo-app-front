import Cookies from "js-cookie";
import { TOKEN } from "./Constants";
export const fetchFunc = async (
  method = "get",
  endpoint = "",
  payload = {}
) => {
  console.log(payload);
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
    body: JSON.stringify(payload),
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get(TOKEN)}`,
    },
  });
};
