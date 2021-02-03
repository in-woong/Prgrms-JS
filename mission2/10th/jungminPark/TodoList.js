const validateData = (data) => {
    //null or undefined
    if(!data) {
        throw new Error(IS_UNDEFINED_OR_NULL)
    }

    const isValidData = data.every((item) => typeof item.text === 'string')

    if(!isValidData) {
        throw new Error(IS_NOT_STRING)
    }
}

function TodoList(initialState, $target){
    this.validation = () => {
        this.state = initialState

        if(!new.target) {
            throw new Error(MISSING_NEW_KEYWORD)
        }

        validateData(this.state)
    }
    this.render = () => {
        todoItem = this.state.map(item => item.isCompleted ? `<li><s>${item.text}</s></li>` : `<li>${item.text}</li>`).join('\n')
        todoItem = '<ul>' + todoItem + '</ul>'
        $target.innerHTML = todoItem
    } 

    this.setState = (nextState) => {
         this.validation(nextState)
         this.state = nextState
         this.render()
    }

    this.validation()
    this.render()
}

const $addTarget = document.querySelector("#todo-add")
function submit() {
    if($addTarget.value === 0){
            alert(NO_MESSAGE)
    }
    else{
        addNewItem($addTarget.value)
    }
}

function addNewItem(value){
    this.todo = [{text : value, isCompleted : false}, ...this.todo]
    this.render()
}

const ERROR_MESSAGE = {
    IS_UNDEFINED_OR_NULL : 'data가 undefined 또는 null인 상태입니다.',
    IS_NOT_STRING : 'data는 문자여야 합니다.',
    MISSING_NEW_KEYWORD : 'new 키워드가 누락되었습니다.',
    NO_MESSAGE : '할 일을 입력하고 버튼을 눌러주세요.'
  }