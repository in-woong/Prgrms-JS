function App () {
    this.data = []

    this.components = []

    this.components.push(new TodoList(document.querySelector(`#todo-list1`), this.data))

    // 컴포넌트를 만드는 이유: 전체코드를 각 컴포넌트로 모듈화하면 유지보수가 편리함
    // 컴포넌트 작업 시 다른 컴포넌트에 영향을 주는 코드가 없어야 함
    // function TodoInput의 역할: function TodoInput의 매개변수로 onAdd()을 전달하고(콜), 
    // onAdd()의 매개변수인 text를 TodoInput으로부터 전달받는다(백)
    // text를 nextData로 처리하여 rendering함
    this.components.push(new TodoInput({
        onAdd: (text) => {
            const nextData = [...this.data, {
                text,
                isCompleted: false
            }]
            this.setState(nextData)
        }
    }))

    // App에서 setState로 Data 변경 시, todoList 인스턴스 내 Data도 변경됨 
    this.setState = (nextData) => {
        this.data = nextData
        this.components.forEach(component => {
            if(component.setState) {
                component.setState(this.data)
            }
        })
    }

    
}