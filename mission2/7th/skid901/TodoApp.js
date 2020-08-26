function TodoApp(targetId) {
  const validateConstructor = () => {
    if (!new.target) {
      throw new Error('TodoList() must be called with new.')
    }
    if (!document.querySelector(`#${targetId}`)) {
      throw new Error('There is no element with the given id.')
    }
  }

  validateConstructor()

  this.states = []
  this.todoAppElement = document.querySelector(`#${targetId}`)
  const todoInput = new TodoInput(this)
  const todoList = new TodoList(this)
  const todoCount = new TodoCount(this)

  const validateStates = (states) => {
    if (!states) {
      throw new Error('States must be a non-null parameter.')
    }
    if (!Array.isArray(states)) {
      throw new Error('States must be an array parameter.')
    }
    if (states.some((state) => !(
      typeof state.text === 'string' && typeof state.isCompleted === 'boolean'
    ))) {
      throw new Error('The states has incorrect state.')
    }
  }

  const generateStateId = () => `${Date.now()}${this.states.length}`

  const setStates = (nextStates) => {
    validateStates(nextStates)

    try {
      localStorage.setItem(targetId, JSON.stringify(nextStates))
    } catch (e) {
      console.log(`An error has occurred while saving data to local storage : ${e}`)
    }

    this.states = nextStates
    todoList.render()
    todoCount.render()
  }

  this.addState = (todoText) => {
    if (todoText.length > 0) {
      setStates([...this.states, {
        text: todoText,
        isCompleted: false,
        id: `${generateStateId()}`,
      }])
    }
  }

  this.clearStates = () => {
    setStates([])
  }

  this.toggleIsCompleted = (stateId) => {
    setStates(this.states.map((state) => ({
      ...state,
      isCompleted: stateId !== state.id ? state.isCompleted : !state.isCompleted,
    })))
  }

  this.deleteState = (stateId) => {
    setStates(this.states.filter(({ id }) => id !== stateId))
  }

  const init = () => {
    let initStates = []

    try {
      const initStatesJSONString = localStorage.getItem(targetId) || '[]'
      initStates = JSON.parse(initStatesJSONString)
    } catch (e) {
      console.log(`An error has occurred while fetching data from local storage. : ${e}`)
      initStates = []
    }

    validateStates(initStates)
    this.states = initStates
    todoList.render()
    todoCount.render()
  }

  init()
}
