const createDOMElement = (tagName, attrs) => {
  const element = document.createElement(tagName);
  attrs &&
    attrs.forEach(({ attr, value }) => {
      attr !== 'textContent'
        ? element.setAttribute(attr, value)
        : (element.textContent = value);
    });
  return element;
};

export default createDOMElement;
