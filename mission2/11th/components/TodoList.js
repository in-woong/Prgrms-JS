import todoCount from "./TodoCount.js";
const todoList = document.querySelector('#todoList');

function TodoList(data, $app, onToggle, onDelete){
    
    
    this.state = data 
    console.log($app)
    if(!$app){
      throw new Error('$app이 올바르지 않습니다.');
    }

    if(!this.state || !Array.isArray(this.state)){
      throw new Error('data가 올바르지 않습니다.');
    }

    this.$target = document.createElement('div')

    //코드 가독성 측면 
    $app.appendChild(this.$target);
    this.$target.setAttribute('data-component-type', 'TodoListEle');
    
    if(!new.target){
        throw new Error('new로 객체를 생성해주세요');
    }
  
    this.render = () =>{
          const todoHtmlStr = this.state.map(({text, isCompleted}) =>
            isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
            //todo=>`<li>${todo.text}</li>`
            
            ).join('')
          
          this.$target.innerHTML=todoHtmlStr
    }
    this.render()

    this.todoCount = new todoCount(this.state);
    
    this.setState = (nextState) =>{
       
        this.state = nextState
        console.log(this.state);
        this.render();
        this.todoCount.setState(this.state);
    }
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.toggleTodo = (event) => {
     const span = event.target;
     const li = span.parentNode;
     this.onToggle(li.id);
     span.className = "";
     span.classList.add(`complete_${this.state[parseInt(li.id-1)].isCompleted}`); 
    }

    

    this.deleteTodo = (event) =>{
      const btn = event.target;
      const li = btn.parentNode;
      todoList.removeChild(li);
      this.onDelete(li.id);
    }

    this.drawTodo = (text) =>{
      const li = document.createElement('li');
      const span = document.createElement('span');
      const delBtn = document.createElement('button');
      li.id=this.state.length+1;

      span.classList.add('todoColor');
      span.innerText = text;
      delBtn.innerText= "❌";
      li.appendChild(span);
      li.appendChild(delBtn);
      
      span.addEventListener("click", this.toggleTodo);
      delBtn.addEventListener("click", this.deleteTodo);
      todoList.appendChild(li);

    }

}



export default TodoList