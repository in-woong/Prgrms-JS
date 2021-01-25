class TodoList {
    constructor(containerId,todoData){
        this.todoData = todoData;
        this.containerId = containerId;
        this.container = document.querySelector(`#${this.containerId}`); 
    }

    typeCheck(){
        if (!Array.isArray(this.todoData)){              
            throw new Error("배열이 아닙니다.");
        }
    }

    contentCheck(){
      this.todoData.forEach(ele =>{
          if(typeof(ele.text) !== "string"){
              throw new Error("스트링이 아닙니다");
          }
      })
    }

    setState(nextData){
        this.todoData = nextData;
        this.render();
    }

    render(){
      try{
        this.typeCheck();
        this.contentCheck();
        this.container.innerHTML = this.todoData.map(ele =>{
          return ele.isCompeleted ? `<div><s>${ele.text}</s></div>` : `<div>${ele.text}</div>`;
        }).join('\n');
      }catch(err){
        console.log(err);
    }
  }
}


var todoData = [
  {
    text: 'JS 공부하기!',
    isCompeleted : true
  },
  {
    text: '취업 준비하기 ✌',
    isCompeleted : false

  }
]

var todoData2 = [
  {
    text: '수강신청 장바구니',
    isCompeleted : true
  },
  {
    text: '배드민턴 라켓 줄 매기',
    isCompeleted : false

  }
]

var studyData = [
  {
    text: 'OS',
    isCompeleted : true

  },
  {
    text: 'Network',
    isCompeleted : false

  }
]

var playData = [
  {
    text: 'Piano',
    isCompeleted : false

  },
  {
    text: 'Badminton',
    isCompeleted : true

  }
]

var todo = new TodoList('todo-list',todoData);
var study = new TodoList('study-list',studyData);
var play = new  TodoList('play-list',playData);

todo.render();
study.render();
play.render();

todo.setState(todoData2);


