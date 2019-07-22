import config from "./config.js";

const fetcher = async queries => {
  const resource = new URL(config.API_URL);

  for (const [key, value] of queries) {
    resource.searchParams.set(key, value);
  }

  try {
    return (await fetch(resource.href)).json();
  } catch (error) {
    throw error;
  }
};

export default fetcher;
