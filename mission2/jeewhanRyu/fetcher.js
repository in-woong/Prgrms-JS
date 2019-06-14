import config from "./config.js";

const fetcher = async keyword => {
  const resource = new URL(config.API_URL);

  resource.searchParams.set(config.QUERY, keyword);

  return (await fetch(resource.href)).json();
};

export default fetcher;
