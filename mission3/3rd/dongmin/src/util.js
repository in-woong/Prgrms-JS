export const debounce = (callback, time) => {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
    }
  
    timer = setTimeout(callback, time);
  }