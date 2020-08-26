
const isValidTodo = (data) => {
    if(typeof data === undefined || data === null || !Array.isArray(data)){
      return false
    }

    return true
  }

function TodoList(data, selector){
    if(!isValidTodo(data)){
        throw new Error("매개변수가 유효하지 않습니다.")
    }

    if(!new.target){
        throw new Error("인스턴스 생성 시 'new'를 붙이세요.");
    }

    this.data = data;

    this.render = () => {
        const htmlString = this.data.map(({isCompleted, text}) => 
            isCompleted ? 
            `<li><s>${text}</s><button type="text" name="deleteList">X</button></li>` :
            `<li>${text}<button type="text" name="deleteList">X</button></li>`
        ).join('')
        document.querySelector(`#${selector}`).innerHTML = htmlString
    }
    this.setState = (nextData) => {
        if(!isValidTodo(nextData)){
            throw new Error("매개변수가 유효하지 않습니다.")
        }
        this.data = nextData
        this.render()
    }
    const todoInputElement = document.getElementById('todo-input')
    const todoButtonElement = document.getElementById('todo-input-button')

    this.render();

    todoInputElement.addEventListener('keypress', (event) =>{
        if(event.key === 'Enter'){
            const addData ={
                text: todoInputElement.value,
                isCompleted: false,
            };
            const immutableList = [...this.data, addData];
            this.setState(immutableList);
        }
    })

    todoButtonElement.addEventListener('click', (event) => {
        if(todoInputElement.value){
            const addData ={
                text: todoInputElement.value,
                isCompleted: false,
            };
            const immutableList = [...this.data, addData];
            this.setState(immutableList);
        }
    })
    
    const todoListElement = document.getElementById('todo-list')
    todoListElement.addEventListener('click', (event) => {
        const target = event.target
        if (target.name === 'deleteList') {
            console.log("click!!!")
            this.render();
        }

    })

    // const buttons = document.querySelectorAll('button[name="deleteList"]');
    // console.log(buttons)
    // buttons.forEach((button, idx) => {
    //     button.addEventListener('click', (event) => {
    //         this.data.splice(idx, 1);
    //         this.render();
    //     });
    // });
}
