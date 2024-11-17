export const fetchResponse = async <T>(api: string): Promise<T> => {
  try {
    const response = await fetch(api);

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data as T;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
