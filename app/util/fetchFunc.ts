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
    },
  });
};
