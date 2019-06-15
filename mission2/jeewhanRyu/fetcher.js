import config from "./config.js";

const fetcher = async keyword => {
  const resource = new URL(config.API_URL);

  resource.searchParams.set(config.QUERY, keyword);

  try {
    return (await fetch(resource.href)).json();
  } catch (error) {
    throw error;
  }
};

export default fetcher;
