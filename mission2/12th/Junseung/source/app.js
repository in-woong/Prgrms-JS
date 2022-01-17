import TodoInput from './todoInput.js';
import TodoList from './todoList.js';
import TodoCount from './todoCount.js';

export default class App {
    constructor(todoModel){
        this.todoModel = todoModel;

        this.$inputTag = document.querySelector("#todo-input");;
        this.$todoListTag = document.querySelector("#todo-list");

        this.dataList = this.todoModel.get();

        this.todoViewModelController();

        // 삭제 버튼 생성 및 이벤트 생성
        this.$removeAllBtn = this.makeRemoveAllBtn();
        this.removeAllClickEvent();
    }

    todoViewModelController(){
        const {$inputTag, $todoListTag, deleteTodo, underLineTodo, addTodo} = this; 
        
        this.todoCount = new TodoCount($todoListTag);
        
        this.todoList = new TodoList($todoListTag, {
            deleteTodo : deleteTodo.bind(this),
            underLineTodo : underLineTodo.bind(this),
        });
        
        this.todoInput = new TodoInput($inputTag, {
            addTodo : addTodo.bind(this),
        });

        if (this.dataList.length > 0) this.setState(this.dataList);
    }

    setState(newDataList){
        this.todoList.setState(newDataList);
        this.todoCount.setState(newDataList);
        this.todoModel.set(newDataList);
    }

    makeRemoveAllBtn(){
        const newBtn = document.createElement("button");
        newBtn.textContent = "모두 삭제";
        this.$inputTag.appendChild(newBtn);

        return newBtn;
    }

    removeAllClickEvent(){
        this.$removeAllBtn.addEventListener("click",(e)=>{
            this.$removeAllBtn.dispatchEvent(new CustomEvent("removeAll",{bubbles:true}))
        })

        this.$removeAllBtn.addEventListener("removeAll", () => {
            this.dataList.splice(0,this.dataList.length);
            this.setState(this.dataList);
            
        })
    }

    // todo 항목 추가 함수
    addTodo(){
        const $input = document.querySelector("input");

        if (!$input.value) throw "데이터를 입력하세요"

        this.dataList.push({text : $input.value, isCompleted : false});
        this.setState(this.dataList);
    }

    // todo 항목 삭제 함수
    deleteTodo(index){
        this.dataList.splice(index,1); 
        this.setState(this.dataList);
    }

    // todo항목 밑줄 긋는 함수
    underLineTodo(index){
        const copyTextData = this.dataList[index];

        copyTextData.isCompleted = copyTextData.isCompleted ? false : true;

        this.dataList.splice(index,1,copyTextData);
        this.setState(this.dataList);
    }
    
}

