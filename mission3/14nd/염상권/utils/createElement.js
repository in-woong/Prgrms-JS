export const createDOMElement = ({ tagName, selectorName, name }) => { 
    const element = document.createElement(tagName);

    element.setAttribute(selectorName, name);

    return element;
}
