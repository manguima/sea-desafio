const BASE_URL: string =
  process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const apiWorker = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default apiWorker;
