const App = function ($target, initialState) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    
    LocalStorage.set('todos', nextState);
    todoInput.render();
    todoList.setState(nextState);
    todoCount.setState(nextState);
  }

  $target.addEventListener('removeAll', () => {
    const {length} = this.state;

    this.setState([]);
    alert(`할 일 ${length}개를 모두 삭제하였습니다.`);
  })

  const removeAllTodos = () => {
    if (!confirm('할 일을 모두 삭제하시겠습니까?')) {
      return;
    }
    $target.dispatchEvent(new CustomEvent('removeAll'));
  }

  const addTodo = () => {
    const $input = $('#todo-list__input');
    const filteredArray = this.state.filter((todo) => todo.text === $input.value);

    if ($input.value.length === ZERO) {
      alert('할 일을 입력해주세요.');
      return;
    }
    if (!isEmptyArray(filteredArray)) {
      alert(`'${$input.value}'는 이미 목록에 있습니다.`);
      return;
    }
    
    this.setState([...this.state, {text:$input.value, isCompleted:false}]);
  }

  const deleteTodo = (event) => {
    const text = $('span', event.target.closest('li')).innerText;

    this.setState(this.state.filter((todo) => todo.text !== text))
  }

  const toggleTodo = (event) => {
    const text = $('span', event.target.closest('li')).innerText;

    this.setState(this.state.map((todo) => {
      if (todo.text === text) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }))
  }

  const todoInput = new TodoInput($target, {addTodo, removeAllTodos});
  const todoList = new TodoList({$target, initialState: this.state, deleteTodo, toggleTodo});
  const todoCount = new TodoCount({$target, initialState: this.state});
}
