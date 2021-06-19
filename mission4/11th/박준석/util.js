export const $ = (ele, dom = document) => dom.querySelector(ele)

export function drag(event) {
  if (event.target.draggable === true){
    event.dataTransfer.setData("text", event.target.dataset.id);
  }
}

export function allowDrop(ev) {
  ev.preventDefault();
}

export function drop(ev) {
  ev.preventDefault();
  console.log(ev.target);
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  //console.log(document.querySelector(`li[data-id="${data}"]`))
  const parentUl =  ev.target.closest('ul')
  parentUl.appendChild(document.querySelector(`li[data-id="${data}"]`));
}
