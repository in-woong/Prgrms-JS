// new App();

function TodoList($target, data) {
  if (!this instanceof TodoList) {
    throw new Error("instance type error")
  }

  this.$target = $target
  this.data = data


  this.validator = (todos) => {
    if (todos === "undefined" || todos === null || todos === '') {
      throw new Error("data type error")
    }
  }

  this.render = (data) => {
    this.validator(data);
    this.$target.innerHTML =
      this.data
        .map(
          (todo, id) =>
            `
            <li class="todo-data__list-item">
              <div class="checkbox">
                <input type="checkbox" class="checkbox-input" id="input-check${id}">
                <label for="input-check${id}" class="label">${todo.text}</label>
              </div>
              <div class="button-group">
                <button class="button button-icon button-delete">
                <span class="button-icon-text">삭제</span>
                <i class="button-icon-symbol" aria-hidden="true">&#10005;</i>
                </button>
              </div>
            </li>
            `
        )
        .join('')
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render()
}


function TodoInput($target, { onAddTodo }) {
  $target.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      if (e.target.value === 'undefined' || e.target.value === null || e.target.value === '') {
        alert("해야 할 일을 입력해주세요.");
      } else {
        onAddTodo(e.target.value);
        e.target.value = "";
      }
    }
  });
}


function TodoCount($target, count) {
  this.$target = $target
  this.count = count
  this.render = () => {
    $target.innerHTML = this.count
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.render();
}


function App() {
  this.data = [
    {
      text: 'JS 공부하기',
      isCompleted: true
    },
    {
      text: 'JS 복습하기',
      isCompleted: true
    },
  ]

  this.render = () => {
    const $list = document.querySelector('#todo-list');
    this.todoList = new TodoList($list, this.data);
    const $input = document.querySelector('#todo-input');
    this.todoInput = new TodoInput($input, {
      onAddTodo: (text) => {
        const nextData = [
          ...this.data,
          {
            text
          }
        ]
        this.setState(nextData)
      }
    })
    const $total = document.querySelector('#todo-total');
    this.todoCount = new TodoCount($total, this.data.length);
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(nextData)
    this.todoCount.setState(nextData.length)
  }

  this.render();
}

new App();


