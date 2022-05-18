/**
 *
 * @param {*} tagName creat할 태그를 작성합니다
 * @param {*} className 태그의 className을 작성합니다
 * @param {*} text element의 text를 정합니다, 기본값으로 null이 등록됩니다
 * @returns el 만들어진 el를 반환합니다.
 */

export const createEl = (tagName, className, text = null) => {
  const el = document.createElement(tagName);
  el.className = className;
  el.textContent = text;
  return el;
};
