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
const newTodo = [
  {
    text: 'new JS 공부하기',
    isCompleted: true
  },
  {
    text: 'new JS 복습하기',
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
  this.todoItems = data;
  checkArg(this.todoItems, that);
  this.render = () => {
    this.todoItems.forEach((element)=>{
      const todoList = document.querySelector("#todo-list");
      const todo = document.createElement('div');
      const todont = document.createElement('s');

      if(element["isCompleted"] === true){
        todo.innerHTML = element.text;
        todoList.appendChild(todo);
      }else {
        todont.innerHTML = element.text;
        todo.appendChild(todont);
        todoList.appendChild(todo);
      }
     
    })
   
  }
  this.setState = (nextData) => {
    const todoList = document.querySelector("#todo-list");
    while(todoList.firstChild){
      todoList.removeChild(todoList.firstChild)
    }
    this.todoItems = nextData;
    this.render();
  }
}

function HobbyList(data){
  this.data = data;
  this.render = () => {
    data.forEach((element)=>{
      const hobbyList = document.querySelector("#hobby-list");
      const hobby = document.createElement('div');
      const hobbydont = document.createElement('s');

      if(element["isCompleted"] === true){
        hobby.innerHTML = element.text;
        hobbyList.appendChild(hobby);
      }else {
        hobbydont.innerHTML = element.text;
        hobby.appendChild(hobbydont);
        hobbyList.appendChild(hobby);
      }
      
    })
   
  }
}

function FoodList(data){
  this.data = data;
  this.render = () => {
    data.forEach((element)=>{
      const foodList = document.querySelector("#food-list");
      const food = document.createElement('div');
      const fooddont = document.createElement('s');

      if(element["isCompleted"] === true){
        food.innerHTML = element.text;
        foodList.appendChild(food);
      }else {
        fooddont.innerHTML = element.text;
        food.appendChild(fooddont);
        foodList.appendChild(food);
      }
      
      
    })
   
  }
}

const toDo = new TodoList(dataTodo);
const hobby = new HobbyList(dataHobby);
const food = new FoodList(dataFood);


toDo.render();
toDo.setState(newTodo);
hobby.render();
food.render();

// 질문 모음
// 1. import export 써서 무듈화 하는 방법
// 2.컴포넌트를 재사용할 수 있는 방법
// 3. 예외처리 피드백

