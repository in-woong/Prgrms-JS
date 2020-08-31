const dataTodo = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  },
];
const dataHobby = [
  {
    text: '축구하기',
    isCompleted: true
  },
  {
    text: '게임하기',
    isCompleted: false
  },
]

const dataFood = [
  {
    text: '치킨',
    isCompleted: true
  },
  {
    text: '피자',
    isCompleted: false
  }

];





const checkArg = (data, that) => {
  try {
    if(!data){
      throw new Error("파라미터가 비어있거나 정의되어 있지 않습니다.")
    }else if (!Array.isArray(data)) {
      throw new Error("파라미터가 배열이 아닙니다.")
    }else if(!(that instanceof TodoList)){
      throw new Error("new를 반드시 사용해주시길 바랍니다.")
    }

  } catch(e) {
    alert(e);
  }
}

function TodoList(data){
  const that = this
  checkArg(data, that);
  this.data = data;
  this.render = () => {
    data.forEach((element)=>{
      const todoList = document.querySelector("#todo-list");
      const todo = document.createElement('div');
      todo.innerHTML = element.text;
      todoList.appendChild(todo);
      
    })
   
  }
}

function HobbyList(data){
  this.data = data;
  this.render = () => {
    data.forEach((element)=>{
      const todoList = document.querySelector("#hobby-list");
      const todo = document.createElement('div');
      todo.innerHTML = element.text;
      todoList.appendChild(todo);
      
    })
   
  }
}

function FoodList(data){
  this.data = data;
  this.render = () => {
    data.forEach((element)=>{
      const todoList = document.querySelector("#food-list");
      const todo = document.createElement('div');
      todo.innerHTML = element.text;
      todoList.appendChild(todo);
      
    })
   
  }
}

const toDo = new TodoList(dataTodo);
const hobby = new HobbyList(dataHobby);
const food = new FoodList(dataFood);


toDo.render();
hobby.render();
food.render();

// 질문 모음
// 1. import export 써서 무듈화 하는 방법
// 2.컴포넌트를 재사용할 수 있는 방법
// 3. 예외처리 피드백

