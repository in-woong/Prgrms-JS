const qs = (selector, $dom = document)  => $dom.querySelector(selector);

const showEl = $el => $el.classList.remove('hide');
const hideEl = $el => $el.classList.add('hide');

export {
  qs,
  showEl,
  hideEl
}
