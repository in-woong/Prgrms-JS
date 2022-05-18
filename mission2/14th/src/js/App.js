import {TodoList} from './TodoList.js';
import {TodoInput} from './TodoInput.js';
import {validateInsertData,validationArrayData,isCreateInstance as _isCreateInstance} from './Validation.js';
import { TodoCount } from './TodoCount.js';
import { insertTodo, getAllTodoList,updateCompleteTodo,removeTodoAll, removeTodo, getTodoSituation } from './storage.js';
export function App(root){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(App)){
            throw('Cannot Create Instance');
        }
        this.$root = root;
    }catch(e){
        console.error(e);
        return null; 
    }
    
};

/*
 * App 컴포넌트 객체 생성시, 최초로 실행되는 함수.
 */
App.prototype.init=function(){
    
    this.render();
    
    const todoCount = new TodoCount({
        parentElement:document.querySelector('.count__todo__section')
    });
    
    const todoList = new TodoList({
        parentElement:document.querySelector('.list__todo__section'),
        setState:(data)=>{
            if( !validationArrayData(data)){
                this.errorMessage('로딩에 실패하였습니다.');
                return;
            }
            todoList.render(data);

            const {completeTodoCount,totalTodoCount} = getTodoSituation();
            todoCount.render({completeTodoCount,totalTodoCount});
        },
        updateCompleteTodo:(id)=>{
            updateCompleteTodo(id);
            todoList.setState(getAllTodoList());
        },
        deleteTodo:(id)=>{
            removeTodo(id);
            todoList.setState(getAllTodoList());
        },
        initTodoData:getAllTodoList()
    });
    
    const todoInput = new TodoInput({
        parentElement:document.querySelector('.input__todo__section'),
        addTodo:(nextData)=>{
            if( ( !validateInsertData(nextData)) ){
                this.errorMessage('로딩에 실패하였습니다.');
                return;
            }
            insertTodo(nextData);
            const list = getAllTodoList();
            todoList.setState(list);
        },
        removeAll:()=>{
            removeTodoAll();
            todoList.setState([]);
        }
    });

    if( (!todoInput) || (!todoList) || (!todoCount)){
        this.errorMessage('로딩에 실패했습니다.');
        return;
    }

    todoInput.init();
    todoList.init();
    todoCount.init();
}

//유연한 에러메시지 처리를 위해 msg 파라미터 추가.
//에러를 UI에서 보여준적이있었나?? 고민해보니 보통 추가할떄는 경고창또는 레이어 팝업을 통한 표현을 많이 하니 alert로 수정
/*
 * 에러 내용을 인자로 받아 alert로 띄어준다.
 */
App.prototype.errorMessage=function(msg){
    alert(msg);
}

//TodoInput, TodoList Container Render
/*
 * TodoInput,TodoList 컴포넌트를 render할수있는 parent영역을 Render
 */
App.prototype.render=function(){
    this.$root.innerHTML=`<section class="input__todo__section">
    </section>
    <section class="list__todo__section">
    </section>
    <section class="count__todo__section">
    </section>`;
}
