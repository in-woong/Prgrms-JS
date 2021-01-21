export default function debounce(callback, time) {
  let timer;
  if (timer) {
    clearTimeout(timer);
  }
  return () => {
    timer = setTimeout(callback, time);
  };
}
