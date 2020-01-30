class App {
  constructor() {
    this.initApp();
  }
  
  initApp() {
    this.initStorageComponent();
    this.initUIComponents();
    this.connectComponents();
    this.loadData();
  }

  initStorageComponent() {
    this.todoItems = new TodoItems();
  }

  initUIComponents() {
    this.purgeBtn = new PurgeBtn('#purge-btn');
    this.todoCount = new TodoCount('#todo-count-text');
    this.todoInput = new TodoInput('#new-item', '#new-btn');

    // TodoList 의 경우에는, TodoItems 클래스의 기능을 알도록 했습니다.
    this.todoList = new TodoList('#todo-list', '#todo-container', this.todoItems);
  }

  connectComponents() {
    // TodoInput 는 TodoItems 클래스에 대해서 모르게 해보았습니다.
    // 함수 참조만 넘겨줘 봤는데, 이렇게 했더니, 
    // 나중에 TodoInput 쪽에서 호출될 때 올바른 this를 참조하려면 bind 해주어야 했습니다.
    this.todoInput.setAddItem(this.todoItems.addItem.bind(this.todoItems))

    this.todoItems.addListener(this.todoCount);
    this.todoItems.addListener(this.todoList);
  }

  loadData() {
    this.todoItems.init();
  }
}

const app = new App();