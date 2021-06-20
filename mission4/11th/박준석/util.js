export const $ = (ele, dom = document) => dom.querySelector(ele)

export function drag(event) {
  if (event.target.draggable === true){
    event.dataTransfer.setData("text", event.target.dataset.id);
  }
}

export function allowDrop(ev) {
  ev.preventDefault();
}

export function drop(ev, dropHandler) {
  const parentUl =  ev.target.closest('ul')
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  parentUl.appendChild(document.querySelector(`li[data-id="${data}"]`));
  dropHandler(data);
}
