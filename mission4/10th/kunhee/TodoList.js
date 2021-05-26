export default function TodoList(params) {
  const $target = params.$target
  const onClick = params.onClick
  const onRemove = params.onRemove
  this.state = params.data || {
    isLoading: true,
    todos: [],
    activeUser: ''
  }

  $target.addEventListener('click', function (e) {
    const id = e.target.closest('.todo-item').dataset.id
    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onClick(id)
    }
  })

  this.bindEvent = () => {
    const lis = $target.querySelectorAll(".todo-item");
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('dragover', (e) => {
        e.preventDefault();
      })
      lis[i].addEventListener('dragend', (e) => {
        e.target.click();
      })
    }

    const uls = $target.querySelectorAll(".todo-list");
    for (let i = 0; i < uls.length; i++) {
      uls[i].addEventListener("dragenter", (event) => {
        // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
        if (event.target.className == "todo-list") {
          event.target.style.background = "purple";
        }
      }, false);
      uls[i].addEventListener("dragleave", (event) => {
        // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
        if (event.target.className  == "todo-list") {
          event.target.style.background = "";
        }
      }, false);
      /*
      uls[i].addEventListener("dragover",  (event) => {
        event.preventDefault();
      }, false);
      uls[i].addEventListener("drop",  (event) => {
        event.preventDefault();
      }, false);
      */
    }


  }

  this.setState = function (nextData) {
    this.state = nextData
    this.render()
    this.bindEvent();
  }
  this.render = function () {
    if (this.state.isLoading) {
      $target.innerHTML = `${this.state.activeUser}목록 로딩중...`
      return;
    }

    let str1 = '';
    let str2 = '';
    this.state.todos.forEach((todo) => {
      if (todo.isCompleted) {
        str1 += `<div class="todo-item" draggable="true" data-bool="true" data-id="${todo._id}"><strike>${todo.content}</strike><button class="remove-button">Remove</button></div>`
      } else {
        str2 += `<div class="todo-item" draggable="true" data-bool="false" data-id="${todo._id}">${todo.content} <button class="remove-button">Remove</button></div>`
      }
    })

    $target.innerHTML = `<div data-bool="true" class="todo-list">${str1}</div><div data-bool="false" class="todo-list">${str2}</div>`
  }

  this.render()
  this.bindEvent();
}