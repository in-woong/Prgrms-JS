export const createElement = (
  tag = 'string',
  className = null || [],
  attr = {}
) => {
  const element = document.createElement(tag);
  if (className) {
    !Array.isArray(className)
      ? element.classList.add(className)
      : className.forEach((name) => element.classList.add(name));
  }
  if (attr) {
    for (const name in attr) {
      element.setAttribute(name, attr[name]);
    }
  }
  return element;
};

export const getElement = (selector) => {
  if (!selector) return;
  return document.querySelector(selector);
};

export const addClassName = (element, className) => {
  if (!element || !className) return;
  !Array.isArray(className)
    ? element.classList.add(className)
    : className.forEach((name) => element.classList.add(name));
};

export const removeClassName = (element, className) => {
  element.classList.remove(className);
};
