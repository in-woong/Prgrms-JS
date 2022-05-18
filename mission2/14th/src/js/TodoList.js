import {isCreateInstance as _isCreateInstance,validationArrayData} from './Validation.js';
export function TodoList({parentElement,setState,updateCompleteTodo,deleteTodo,initTodoData}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoList)){
            throw('Cannot Create Instance');
        }
        this.$parentElement=parentElement;
        TodoList.prototype.setState=setState;
        TodoList.prototype.deleteTodo=deleteTodo
        TodoList.prototype.updateCompleteTodo=updateCompleteTodo;
        this.initTodoData=initTodoData;
    }catch(e){
        console.error(e);
        return null; 
    }
}

/**
 * @description TodoList를 최초실행할때 진입함수.
 * 
 */
TodoList.prototype.init=function(){
    
    this.setState(this.initTodoData);
    this.bindEvent();
}

/**
 * 
 * @param {*} data 
 * @description 넘어온 TodoList데이터를 Render
 */
//가독성 향상을 위한 render함수 수정 ul태그는 감싸고 있고 reduce는 reduce의 관심사대로 드러날수있게.
TodoList.prototype.render=function(data){
    const todoListHTML =  data == null ? '' : data.reduce((prev,curr,index)=>{
        return `${prev}
            <li data-id=${index}>
                ${curr.isCompleted ? `<s>${curr.text}</s>`: curr.text}
                <button class="deleteBtn">삭제</button>
                </li>`;
        },''); 
    
    this.$parentElement.innerHTML=`${todoListHTML ? `<ul>
    ${todoListHTML}
    </ul>` : `<span>할일을 등록해보세요.</span>`} `;
    
}

/**
 * 
 * @description TodoList 클릭 이벤트 정의
 */
TodoList.prototype.bindEvent=function(){
    //할일삭제 + isComplete 삭선처리 이벤트
    this.$parentElement.addEventListener('click',event=>{
        event.preventDefault();
        const target = event.target;
        const { nodeName } = target;
        let selectedID = null;
        if(target.closest('li')){
            selectedID = target.closest('li').dataset['id'];
            if(nodeName === 'BUTTON'){
                this.deleteTodo(Number(selectedID));        
            }else{
                this.updateCompleteTodo(Number(selectedID));
            }
        }
    });
}

/**
 * 
 * @param {*} data 
 * @description 현재 Todo 현황을 가져온다.
 */
TodoList.prototype.getTodoSituation = function(data){
     const completeTodoCount = data.filter(({isCompleted})=> isCompleted).length;
     const totalTodoCount = data.length;

     return {completeTodoCount,totalTodoCount};
}
