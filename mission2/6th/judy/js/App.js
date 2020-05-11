
function App() {

  const $list = document.querySelector('#todo-list');
  const $input = document.querySelector('#todo-input');
  const $total = document.querySelector('#todo-total');
  const $removeAll = document.querySelector('#todo-all-remove');

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

  this.listbox = () => {
    const $listBox = document.createElement("ul");
    $listBox.className = "todo-data__listbox"
    $list.appendChild($listBox)
  }

  this.render = () => {
    this.todoList = new TodoList($list, this.data);
    this.todoInput = new TodoInput($input, {
      onAddTodo: (text, isCompleted) => {
        const nextData = [
          ...this.data,
          {
            text,
            isCompleted: true
          }
        ]
        this.setState(nextData)
      }
    })

    this.todoCount = new TodoCount($total, this.data.length);
    
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(nextData)
    this.todoCount.setState(nextData)
  }

  this.remove = () => {
    $removeAll.addEventListener('click', e => {
      this.setState([])
      $list.append()
      //this.todoCount.setState(nextData.length);
    })
  }

  this.listbox();
  this.render();
  this.remove();

}