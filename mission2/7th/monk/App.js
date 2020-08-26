
function App(){

  const TODO_APP_ID = 'todo-app';
  const $sectionTodoList = document.querySelector('#todo-list');
  this.data = storage.get(TODO_APP_ID, []);
  this.components = [];
  
  this.components.push(new TodoInput({
    onAdd: (text) => {
      const nextData = [...this.data, {
        text, //es6: property shorthand
        isCompleted: false
      }]
      this.setState(nextData);
    },
    RemoveAll: () => {
      this.setState([]);
    }
  }))

  this.components.push(new TodoList({
    data: this.data, 
    elementId: 'todo-list', 
    onTodoClick: (index) => { ////isCompleted 토글 처리
      //기존에 있는 데이터를 고치는 것이 아니라
      //매번 새로운 배열 객체 만들기 
      const nextData = [...this.data];
      nextData[index].isCompleted = !nextData[index].isCompleted;
      this.setState(nextData);
    },
    onRemoveClick: (index) => {
      const nextData = [...this.data]
      nextData.splice(index, 1)

      this.setState(nextData)
    }
  }));

  this.components.push(
    new TodoCount({
      data: this.data,
      elementId: 'todo-count',
    })
  )
  
  this.setState = (nextData) => {
    this.data = nextData;
    storage.set(TODO_APP_ID, nextData);
    this.components.forEach(component => {
      if(component.setState){
        component.setState(this.data);
      }
    })
    
  }
  $sectionTodoList.addEventListener('removeAll', () => {
    this.setState([]);
  })
}
