
function App(){
    
    const $todoList = document.querySelector('#todo-list');
    const $todoInput = document.querySelector("#todoInput");
    const $todoCount = document.querySelector("#todo-count");
    const $removeAll = document.querySelector("#removeAll");

    $todoList.addEventListener('click',e=>{
        const index = e.target.id;
        const nextData = [...this.data];
        if(e.target.tagName === 'BUTTON'){
            nextData.splice(index, 1)
        }
        else if(e.target.tagName === 'LI'){
            
            nextData[index].isCompleted = false;
            
        }
        this.setState(nextData);
    });
    
    $removeAll.addEventListener('click',e=>{
        const nextData = [];
        this.setState([]);

    });
    this.storageSet=(key,value)=>{
        localStorage.setItem(key,JSON.stringify(value));
    }
    this.setState=(nextData)=>{
        this.data = nextData;
        this.storageSet('data',this.data);
        this.todoList.setState(nextData);
        this.todoCount.setState(nextData);
        
        
    }
    this.storageGet=(data)=>{
        const localStorage = window.localStorage;
        try{
            const getItem = localStorage.getItem(data);
            if(getItem){
                this.data = JSON.parse(getItem);
            }
        }
        catch(e){
            throw new error("localStorage Fail");
        }
    }
    this.init=()=>{
        this.todoList = new TodoList(this.data,$todoList);
        this.todoCount = new TodoCount(this.data,$todoCount);
        this.todoInput = new TodoInput($todoInput,{
            onAddTodo :(text)=>{
                const nextData =[
                    ...this.data,
                    {
                        text: text,
                        isCompleted: true

                    }
                ]
                
                this.setState(nextData)
            }
           
        });
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
          })  
    
    }
    const localStorage = this.storageGet('data');
    this.init();
}
