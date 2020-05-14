const data = [{
  text: '할일 1',  // 할 일 이름
  isCompleted: false, // 완료 여부
},
{
  text: '할일 2',  // 할 일 이름
  isCompleted: false, // 완료 여부
},
{
  text: '할일 3',  // 할 일 이름
  isCompleted: false, // 완료 여부
}]


function addTodoListTask() {
    //  data에 할 일 추가

    let element = document.createElement("div");
    element.setAttribute("class", "todoTask");

    let text = document.getElementById("todoListInput").value;
    let textTag = document.createElement("span");
    textTag.innerHTML = text;

    textTag.addEventListener("click", function(event){

      if(textTag.innerHTML.includes("(완료)")){
        let target = data.find(datum => datum.text === textTag.innerHTML)
        target.isCompleted = false
        let newText = textTag.innerHTML.replace("(완료)", "")
        textTag.innerHTML = newText

      }
      else{
        textTag.innerHTML = "(완료)"+textTag.innerHTML

        let target = data.find(datum => datum.text === textTag.innerHTML)
        target.isCompleted = true
      }
    })

    let button = document.createElement("button");
    button.setAttribute("class", "removeTask");
    button.innerHTML = "삭제";
    //  삭제 구현
    button.addEventListener("click", function(){
        console.log(this);
        console.log(this.parentElement.parentElement);

        let grandParent = this.parentElement.parentElement;
        let parent = this.parentElement;
        grandParent.removeChild(parent);

        // 데이터 리스트에서 삭제
    })

    element.appendChild(textTag);
    element.appendChild(button);

    let parentElement = document.getElementById("todo-list");
    parentElement.appendChild(element);
    //  input 란 지워주기
    document.getElementById("todoListInput").value = '';

    //  data list에 추가
    let task = {
      text: text,
      isCompleted:false
    }
    data.push(task)
}

document.getElementById("addList").addEventListener("click", function(){
  addTodoListTask();

})

  //  2. [보너스] 예외 처리
  //  2-1) null, undefined 체크
  const checkNullOrUndefined = (data) =>{
    if(!data){
      throw new Error("Error: null or undefined")
    }
  }

  //  2-2) 타입 검사
  const checkDataType = (data) =>{
    if(!Array.isArray(data)){
      throw new Error("Error: data is not Array")
    }
  }

  //  2-3) 데이터 내용이 이상할 때 발생하는 에러 (String 타입이 아니라면, 으로 가정)
  const checkDataContent = (data) => {
    data.every( function (item, index ,array){
      if(typeof item.text !== 'string'){
        throw new Error("Error: text의 데이터 타입이 String이 아님.")
      }
    })
  }

  const validate = (data) => {
    checkNullOrUndefined(data)
    checkDataType(data)
    checkDataContent(data)
  }

  // 1. 기본 구현: TodoList 컴포넌트 구현 -> 3. Multi component 구현(매개변수 추가(divId))
  const TodoList = function(dataList, elementId) {
    this.dataList = dataList
    this.elementId = elementId
    //  Error Handling
    validate(data)

    //  2-4) new 키워드 안 붙이고 함수 실행 시 발생하는 에러
    if(!(this instanceof TodoList))
      throw new Error("new 키워드가 없이 함수 실행")

    this.render = () => {
      document.querySelector(elementId).innerHTML = ''
      let element = '';
      for(value of dataList){
        if(!value.isCompleted){
          element += `<div><strike>${value.text}</strike></div>`
        }
        else{
          element += `<div>${value.text}</div>`
        }
      }
      document.querySelector(elementId).innerHTML += element;
    }

    this.setState = (inputData) =>{
      validate(inputData)
      this.dataList = inputData
      this.render();
    }
  }

  /*const todoList = new TodoList(data, '#todo-list')
  const todoList2 = new TodoList(data2, '#todo-list2')
  const todoList3 = new TodoList(data3, '#todo-list3')

  todoList.render()
  todoList2.render()
  todoList2.setState(data4)
  todoList3.render()*/
