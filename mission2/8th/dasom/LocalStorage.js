function LocalStorage(){
    this.storage = window.localStorage;

    this.setDefaultData = () => {
      const defaultData = [
          {
            text: 'JS 공부하기',
            isCompleted: true
          },
          {
            text: 'JS 복습하기',
            isCompleted: false
          }
      ];

      this.storage.getItem('todo') === null? this.storage.setItem('todo', JSON.stringify(defaultData)): '';
      
    }

    this.getData = () => {
      return JSON.parse(this.storage.getItem("todo"));
    }

    this.setData = (todoList) => {
      this.storage.removeItem('todo');
      this.storage.setItem('todo', JSON.stringify(todoList));
    }

    this.setDefaultData();
}