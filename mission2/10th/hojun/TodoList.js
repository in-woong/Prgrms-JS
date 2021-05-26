function TodoList(data, target) {
  if (!new.target) {
    throw new Error('new가 선언되지 않았습니다.');
  }
  validator(data); //data is null or undefined

  this.target_element = document.querySelector(target);
  this.register = document.querySelector('.addVal');
  this.del_btn = document.querySelector('.delBtn');
  this.data = data;

  this.render = function () {
    let todo_list = '';
    todo_list = this.data
      .map(
        (todo, index) =>
          `<div><span class="todo" id=${index}>` +
          (!todo.isCompleted ? `${todo.text}` : `<s class="todo" id=${index}>${todo.text}</s>`) +
          `</span><button class="delBtn" id=${index}>삭제</button></div>`
      )
      .join('');
    this.target_element.innerHTML = todo_list;
  };
  this.render();

  this.setState = function (nextData) {
    this.data = [...this.data, nextData];
    this.render();
  };

  this.addTodo = () => {
    if (this.register.value) {
      const newData = {
        text: this.register.value,
        isCompleted: false,
      };
      this.setState(newData);
      this.register.value = '';
      this.register.focus();
      this.render();
    }
  };

  this.delTodo = (id) => {
    this.data.splice(id, 1);
    this.render();
  };

  this.changeCompleteState = (index) => {
    this.data[index].isCompleted = !this.data[index].isCompleted;
    this.render();
  };

  function validator(data) {
    if (!data) {
      throw new Error('data가 비었습니다.');
    }
    // type check
    const isValidData = data.every((todo) => typeof todo.text === 'string' && typeof todo.isCompleted === 'boolean');
    if (!isValidData) {
      throw new Error('data의 타입이 올바르지 않습니다.');
    }
  }

  //할일 추가
  document.querySelector('.addBt').addEventListener('click', this.addTodo);
  this.register.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  });

  //클릭이벤트
  this.target_element.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.className === 'todo') {
      const id = e.target.getAttribute('id');
      this.changeCompleteState(id);
    } else if (e.target.className === 'delBtn') {
      const id = e.target.getAttribute('id');
      this.delTodo(id);
    }
  });
}
