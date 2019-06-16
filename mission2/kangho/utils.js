const debounce = (fn, milli = 1000) => {
  let debounceTimer = null;

  return ((...arguments) => {
    console.log(debounceTimer);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout((() => {
      fn(...arguments)
    }).bind(this), milli);
  });
}