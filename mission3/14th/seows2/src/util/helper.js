import { MESSAGES } from './Messages.js';

export const qs = (selector, scope = document) => {
  const $container = scope.querySelector(selector);

  if (!$container) throw new Error(MESSAGES.ERROR.NO_CONTAINER);

  return $container;
};

export const qsAll = (selector, scope = document) => {
  const $container = Array.from(scope.querySelectorAll(selector));

  if (!$container) throw new Error(MESSAGES.ERROR.NO_CONTAINER);

  return $container;
};

export const on = (target, eventName, handler) => {
  target.addEventListener(eventName, handler);
};

export const delegate = (target, eventName, selector, handler) => {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);
    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
};

export const emit = (target, eventName, detail) => {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
};

export const debounce = (callback, delay = 0) => {
  let timer = null;
  const delayedCallback = (...params) => {
    clearTimeout(timer);
    timer = null;
    return callback(...params);
  };

  const debouncedCallback = (...params) => {
    if (timer) return;
    timer = setTimeout(() => delayedCallback(...params), delay);
  };

  return debouncedCallback;
};
