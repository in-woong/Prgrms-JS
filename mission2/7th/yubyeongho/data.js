export const fetch = function (key) {
  const data = localStorage.getItem(key);
  if (!data) return [];
  return JSON.parse(data);
};

export const save = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};
