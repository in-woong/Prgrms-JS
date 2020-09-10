function App() {

    this.data = [{
        text: 'test1',
        isCompleted: true
    }];
    const $todoList = document.querySelector('#todo-list');

    // 컴포넌트 인스턴스 생성
    const todoInput = new TodoInput(this.data, $todoList);
}

new App();
