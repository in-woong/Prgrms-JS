import TodoList from './TodoList.js'

const $todoInput = document.querySelector('#create-todo');

function AddTodo({ onPressEnter }){
    this.onPressEnter = onPressEnter
    this.eleInput = $todoInput.value

    $todoInput.addEventListener('keypress', (e)  => { 
      const {value} = e.target
      // key.key 의 값이 Enter 일 경우 코드 실행  
      if( e.key == 'Enter' ){     
        if( value.length === 0 ){
          alert("할 일을 입력해주세요~")
        }else{
          $todoInput.value = ''
          this.onPressEnter(value) // AddTodo를 생성하면서 정의한 콜백함수를 여기서 실행.
                                   // 이렇게 하면 AddTodo는 onPressEnter의 구현이 뭔지 몰라도 됨.       
        }
      }
    })
  }

export default AddTodo
