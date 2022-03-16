export function triggerDebounce(callBack, time) {
  setTimeout(callBack, time);
  return clearTimeout(callBack);
}
