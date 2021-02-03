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
      $target.innerHTML = this.state.filter(state => state.visible === true).map(state => state.isCompleted ? `<div style="display: flex; margin-bottom: 10px; cursor: pointer;"><div onclick="isCompletedChange(${state.countData})"><s>(완료) ${state.text}</s></div><button style="margin-left: 10px;" onclick="Delete(${state.countData})">삭제</button></div>` :  `<div style="display: flex; margin-bottom: 10px; cursor: pointer;"><div onclick="isCompletedChange(${state.countData})">${state.text}</div><button style="margin-left: 10px;" onclick="Delete(${state.countData})">삭제</button></div>`).join('')
  }
  

  this.setState = (nextState) => {
    validateData(nextState)
    this.state = nextState
    this.render()
  }

  this.validation()
  this.render()
}

function AddTodoBtn($addTarget, $id) {
    document.getElementById('add_Btn').addEventListener('click', () => {
      inputValue = $addTarget.value
      if(inputValue.length === 0) {
        alert('할 일을 입력하고 버튼을 눌러주세요.')
      }else{
        studyData.push({
          countData : studyData.length + 1,
          text : `${inputValue}`,
          isCompleted : false,
          visible : true,
        })

        new TodoList(studyData, $target)
        $addTarget.value = ''
      }
    }) 
}

function AddTodoEnter($addTarget, $id) {
  document.getElementById('addTodo').addEventListener('keypress', function(key) {
    if(key.key === 'Enter') {
      inputValue = $addTarget.value
      if(inputValue.length === 0) {
        alert('할 일을 입력하세요.')
      }else{
        studyData.push({
          countData : studyData.length + 1,
          text : `${inputValue}`,
          isCompleted : false,
          visible : true,
        })

        new TodoList(studyData, $target)
        $addTarget.value = ''
      }
    }
    
  
  }) 
}


function Delete(stateCount) {
  studyData[stateCount-1].visible = false
  new TodoList(studyData, $target)
}


function isCompletedChange(stateCount) {
  if(studyData[stateCount-1].isCompleted){
    studyData[stateCount-1].isCompleted = false
  }else{
    studyData[stateCount-1].isCompleted = true
  }
  new TodoList(studyData, $target)
}
