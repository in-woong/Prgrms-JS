export const apiUrl = `https://jjalbot.com/api/jjals`

export const debounce = (targetFunction, debounceTime = 500) => {
  let timeoutId = null;

  return (...parameters) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      targetFunction(...parameters);
      timeoutId = null
    }, debounceTime);
  }
}
