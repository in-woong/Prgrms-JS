const createDOMElement = (tagName, attrs) => {
  const element = document.createElement(tagName);
  attrs &&
    attrs.forEach(({ attr, value }) => {
      element.setAttribute(attr, value);
    });
  return element;
};

export default createDOMElement;
