export default function TodoList(params) {
  const $target = params.target
  const $targetIsCompleted = document.querySelector('#todo-list-isCompleted');
  const onClick = params.onClick
  const onRemove = params.onRemove
  let data = params.data || []
  $target.addEventListener('click', function(e) {
    const id = e.target.closest('li').dataset.id
    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    }else {
      onClick(id)
    }
  })
  this.setState = function(nextData) {
    data = nextData
    this.render()
  }
  this.render = function() {
    const onDragStart=(event)=> {
      //event.dataTransfer.setData('text/plan', event.target.id);
    }
    const onDrop =(event)=>{
      console.log('onDrop')
    }
    
    const htmlString = data.map(function(todo) {
      const contentHTML = todo.isCompleted
        ? ``
        : `${todo.content}`

      return `<li class="dragInner" draggable="true" ondragstart='${onDragStart(event)};'ondrop='${onDrop(event)};' data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button">Remove</button></li>`
    })
    const htmlStringCompleted = data.map(function(todo) {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : ``

        return `<li class="dragInner" draggable="true" data-id="${
          todo._id
        }">${contentHTML} <button class="remove-button">Remove</button></li>`
      })
    $targetIsCompleted.innerHTML = `<ul>${htmlStringCompleted.join('')}</ul>`
    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }
  this.render();
}
