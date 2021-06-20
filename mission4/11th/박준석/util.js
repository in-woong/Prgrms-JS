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
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  dropHandler(data);
}
