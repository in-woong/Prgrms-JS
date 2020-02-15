function TodoList(data, targetId) {
  if(!new.target) {
    throw new Error("new 생성자로 함수를 호출하세요.");
  }

  try{
    isValidData(data);
    isValidTargetId(targetId);

    this.data = data;
    this.targetId = targetId;

    this.render = function() {
      if(this.data.length === 0) {
        document.querySelector(`#${this.targetId}`).innerHTML =
          "할 일을 입력하세요!";
        return;
      }

      document.querySelector(`#${this.targetId}`).innerHTML = this.data
        .map(
          (item) => 
          `<div class="todo-text" data-id=${item.id}>
          ${item.isCompleted
          ? `<s>${item.text}</s>` 
          : item.text}
          <button class="todo-delete-button" value=${item.id}>삭제</button>
          </div>`)
        .join('');

      const $deleteButtons = document.querySelectorAll('.todo-delete-button');
      $deleteButtons.forEach(button => {
        button.addEventListener(
          'click', e => this.deleteTodo(e.target.value)
        );
      });

      const $todoTexts = document.querySelectorAll('.todo-text');
      $todoTexts.forEach(text => {
        text.addEventListener('click', e => {
          this.setCompletedItem(e.target.dataset.id);
        });
      })
    }
  
    this.deleteTodo = function(todoId) {
      const nextData = this.data.filter(item => item.id !== todoId );
      this.setState(nextData);  
    }

    this.insertTodo = function(newTodoText) {
      this.data.push({
        id: this.data.length + 1 + '',
        text: newTodoText,
        isCompleted: false,
      });
      this.setState(this.data);
    } 

    this.setCompleted = function(todoId) {
      this.data.forEach(item => {
        if(item.id === todoId && !item.isCompleted){
          item.isCompleted = true;
        }
      })
      this.render();
    }

    this.setState = function(nextData) {
      isValidData(nextData);
      this.data = nextData;
      this.render();
    }

    this.render();
  }catch(e) {
    console.log(e.message);
  }
} 
