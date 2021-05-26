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
        $target.innerHTML = this.state.map(({ text, isCompleted }) => (isCompleted ? `<div>${text}</div>` : `<div><s>${text}</s></div>`)).join('')
    }
  
    this.setState = (nextState) => {
      validateData(nextState)
      this.state = nextState
      this.render()
    }
  
    this.validation()
    this.render()
  }
  
  const todo1 = new TodoList(studyData1, document.querySelector('#todo-list'))
  
  const todo2 = new TodoList(studyData2, document.querySelector('#study-list'))
  
  //
  
  //