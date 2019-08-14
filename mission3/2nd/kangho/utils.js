const debounce = (fn, wait = 1000) => {
  let timerId;
  let result;
  let lastArgs;
  let lastThis;
  let lastCallTime;
  let lastInvokeTime;

  const useRAF = (wait !== 0) || typeof window.requestAnimationFrame !== 'function'

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      cancelAnimationFrame(timerId);
      return requestAnimationFrame(pendingFunc)
    }
    clearTimeout(timerId);
    return setTimeout(pendingFunc, wait)
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArgs = lastThis;

    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = fn.apply(thisArgs, args)
    return result
  }

  function timerExpired() {
    const time = Date.now();
    if (time - lastCallTime >= wait) {
      return invokeFunc(time);
    }
    startTimer(timerExpired, (wait - time - lastCallTime))
  }


  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    lastCallTime = Date.now();

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }

    return result;
  }

  return debounced
}

export {
  debounce,
}