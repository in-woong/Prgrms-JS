/*
권영근님 코드 참조
mission3/5th/KwonYoungGeun/js/utils/index.js
*/
export function $(selector) {
  return document.querySelector(selector)
}

export function generateHTMLInputString({
  type,
  name,
  id,
  className,
  placeholder,
}) {
  return `<input 
    type="${type}" 
    ${name && `name="${name}"`}  
    ${id && `id="${id}"`} 
    ${className && `class="${className}"`}  
    ${placeholder && `placeholder="${placeholder}"`}
    ></input>`
}
