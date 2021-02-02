const validateData = (data) => {
  // Null 과 undefined 인 경우 여기서 걸림

  if(!data) {
      throw new Error('data 가 정상이 아닙니다.')
  }

  const isValidData = data.every((todo) => typeof todo.text === 'string')

  if(!isValidData) {
    throw new Error('data의 text가 string이 아닙니다.')
  }
}

function TodoList(initialState, $target) {
  this.state = initialState
  
  this.validation = (state) => {
    if(!new.target) {
      throw new Error('new 키워드는 필수 입니다.')
    }
  }

  this.render = () => {
      $target.innerHTML = this.state.filter(state => state.visible === true).map(state => state.isCompleted ? `<div style="display: flex;"><div onclick="isCompletedChange(${state.id})"><s>(완료) ${state.text}</s></div><button onclick="Delete(${state.id})">삭제</button></div>` :  `<div style="display: flex;"><div onclick="isCompletedChange(${state.id})">${state.text}</div><button onclick="Delete(${state.id})">삭제</button></div>`).join('')
  }
  

  this.setState = (nextState) => {
    validateData(nextState)
    this.state = nextState
    this.render()
  }

  this.validation()
  this.render()
}

function Delete(stateId) {
  studyData[stateId-1].visible = false
  new TodoList(studyData, document.querySelector('#study-list'))
}


function isCompletedChange(stateId) {
  if(studyData[stateId-1].isCompleted){
    studyData[stateId-1].isCompleted = false
  }else{
    studyData[stateId-1].isCompleted = true
  }
  new TodoList(studyData, document.querySelector('#study-list'))
}
