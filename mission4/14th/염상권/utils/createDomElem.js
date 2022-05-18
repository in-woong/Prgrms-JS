export const createDomElem = ({ tagName, selector, name }) => { 
    const element = document.createElement(tagName);
    element.setAttribute(selector, name);
    return element;
}
