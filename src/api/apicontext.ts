export const mushroomServerURL = "http://localhost:8000";
export const frontEndServerURL = "http://localhost:3000";

export const mushroomFetch = async (
  target: string,
  method?: string,
  qs: Record<string, any> = {}
): Promise<any> => {
  const searchParams = new URLSearchParams(qs);
  console.log("search:", searchParams, !!searchParams);
  const url = `${mushroomServerURL}/${target}`;

  const response = await fetch(
    `${url}${
      searchParams.values.length == 0 ? "" : "?"
    }${searchParams.toString()}`,
    {
      method: method ? method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
