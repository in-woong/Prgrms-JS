const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('input');
const todoList = document.querySelector('#todoList');

function TodoList(data, $app){
    
    
    this.state = data 
    
    if(!$app){
      throw new Error('$app이 올바르지 않습니다.');
    }

    if(!this.state || !Array.isArray(this.state)){
      throw new Error('data가 올바르지 않습니다.');
    }

    this.$target = document.createElement('div')

    //코드 가독성
    $app.appendChild(this.$target);

    this.$target.setAttribute('data-component-type', 'TodoListEle');
    //this.$target.className = 'TodoList'
    


    //[Mission1] 보너스 new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기 
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

    
    this.setState = (nextState) =>{
        console.log('TodoList의 this.state');
       
        this.state = nextState
        console.log(this.state);
        this.render();
    }

    this.toggleTodo = (event) => {
      const span = event.target;
      const li = span.parentNode;
      
      const toggleTodos = this.state.map((todo)=>{
        
        //...todo 하면 인자가 2개가 있는데 isCompleted 만 따로 인지하고 반전시켜주나 신기하네 이건 후에 테스트해보자! 
        return todo.id === parseInt(li.id) ? {...todo, isCompleted : !todo.isCompleted } : todo
      });
     span.className = "";
     span.classList.add(`complete_${!this.state[parseInt(li.id)-1].isCompleted}`);
     this.setState(toggleTodos);
      
    }

    this.deleteTodo = (event) =>{
      const btn = event.target;
      const li = btn.parentNode;
      todoList.removeChild(li);
      console.log('li id')
      console.log(li.id)
      const cleanTodos = this.state.filter((todo)=>{
        return todo.id !== parseInt(li.id);
      });
      console.log('cleanTodos');
      console.log(cleanTodos);
      this.setState(cleanTodos)
    }

    this.drawTodo = (text) =>{
      const li = document.createElement('li');
      const span = document.createElement('span');
      const delBtn = document.createElement('button');
      li.id=this.state.length;

      span.classList.add('todoColor');
      span.innerText = text;
      delBtn.innerText= "❌";
      li.appendChild(span);
      li.appendChild(delBtn);
      
      span.addEventListener("click", this.toggleTodo);
      delBtn.addEventListener("click", this.deleteTodo);
      todoList.appendChild(li);

    }
    this.handleSubmit = (event) =>{
      event.preventDefault();
      const curValue = todoInput.value;
      //alldata(curValue);
      
      const newData = [
        ...this.state
        ,{
        id : this.state.length+1,
        text : curValue,
        isCompleted : false
      }
    ];
      this.setState(newData);
      this.drawTodo(curValue);
      todoInput.value = '';
    }

    todoForm.addEventListener('submit', this.handleSubmit);
}



// try{
//   const $app = document.querySelector('#app')
//   const todoList = new TodoList(data, $app);
//   //new TodoList([{text : 'hey'}], $app);
//   //new TodoList(data3, document.querySelector(`#todo-list3`));
//   setTimeout(()=>{
//     todoList.setState([
//       ...data,
//       {
//         text:"first"
//       }
//     ])

//     setTimeout(()=>{
//       todoList.setState([
//         ...data,
//         {
//           text:"second"
//         }
//       ])
//     },2000);
//   },2000);

  
// }catch(error){
//   alert(error.message)
// }



export default TodoList