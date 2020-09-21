export default function Spinner() {
  const element = document.createElement('div')
  element.innerHTML = `<div class="loader"></div>`;
  return element;
}
