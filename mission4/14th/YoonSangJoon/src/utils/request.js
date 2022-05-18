const request = async (url, option) => {
  const response = await fetch(url, option);
  if (response.ok) {
    return response.json();
  }
};

const requestWithoutJson = async (url, option) => {
  const response = await fetch(url, option);
  if (response.ok) {
    return response;
  }
};

export { request, requestWithoutJson };
