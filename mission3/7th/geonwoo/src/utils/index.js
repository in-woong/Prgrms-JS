export async function fetchData(text) {
  const result = await fetch(`https://jjalbot.com/api/jjals?text=${text}`);
  return await result.json();
}

export const debounce = (func, time = 500) => {
  let timer = null;
  return (...parameters) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...parameters); // 관심사의 분리, 고차함수.. 범용성을 생각하자.
      timer = null;
    }, time);
  };
};
