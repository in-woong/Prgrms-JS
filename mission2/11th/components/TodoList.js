import todoCount from "./TodoCount.js";
const todoList = document.querySelector('#todoList');

function TodoList(data, $app, onToggle, onDelete){
   
   
   
    this.state = data 
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.$target = document.createElement('ul')


    if(!$app){
      throw new Error('$app이 올바르지 않습니다.');
    }

    if(!this.state || !Array.isArray(this.state)){
      throw new Error('data가 올바르지 않습니다.');
    }

  
    //코드 가독성 측면 
    $app.appendChild(this.$target);
    this.$target.setAttribute('data-component-type', 'TodoListEle');
    
    if(!new.target){
        throw new Error('new로 객체를 생성해주세요');
    }
  
    this.render = () =>{
        console.log(this.state);
          const todoHtmlStr = this.state.map(({id, text, isCompleted}) =>
            // isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
            //todo=>`<li>${todo.text}</li>`
            `<li id=${id} class="complete_${isCompleted}">
              <span class="complete_false">${text}</span>
              <span class="todoBtn">${'❌'}</span>
              </li>`
            ).join('')
          
          this.$target.innerHTML=todoHtmlStr
    }
    this.render()

    this.todoCount = new todoCount(this.state);
    
    this.setState = (nextState) =>{
       
        this.state = nextState
        
        this.render();
        this.todoCount.setState(this.state);
    }
    

    

    this.$target.addEventListener("click", (e)=>{
      const { classList } = e.target
      if (classList.contains("complete_false") || classList.contains("complete_true")) 
          this.onToggle(e.target.closest("li").id);
        
      if (classList.contains("todoBtn")) 
        this.onDelete(e.target.closest("li").id);
    })

   
}



export default TodoList