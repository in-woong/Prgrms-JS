function isKeyExists(obj, key) {
  if (obj[key] === undefined) {
    return false
  }
  return true
}

function isValueType(value, type) {
  return typeof value === type
}

function renderLi({ text, isCompleted }) {
  if (!isCompleted) {
    return `<li>${text}</li>`
  }
  return `<li><s>${text}</s></li>`
}

function check(data, selector) {
  // condition1 : 매개변수가 null이나 undefined로 들어왔을 경우 처리
  if (!data && !selector) {
    throw new Error('arguments is wrong format...')
  }
  // condition2 : 매개변수로 넘어온 data가 Array가 아닌 경우 처리
  if (!Array.isArray(data)) {
    throw new Error('data arguments is not array')
  }
  // condition4 : 데이터 내용이 이상한 경우
  if (data) {
    // 이건 데이터 내용이 어떻게 이상한지 따로 정의를 해야할 것 같다.
    /**
     * 1. 넘어온 데이터의 키가 예상한 키가 아닌 경우,
     * - 데이터의 키가 text, isCompleted가 아닌 경우
     * 2. 넘어온 데이터의 프로퍼티 타입이 이상한 경우
     * - text가 number이거나, isComplete가 string인 경우
     * - 만약 isComplete가 string인데 'true'이거나 'false'인 경우..는 그냥 string이기 때문에 예외로 처리
     * 3. text, isCompleted 데이터가 아닌 다른 키가 넘어온 경우
     * - 무시
     */
    // 위에서 data가 배열인지 체크를 했기 때문에, 이순간 data는 무조건 Array임을 알 수 있다.
    data.map((d) => {
      if (!isKeyExists(d, 'text') || !isKeyExists(d, 'isCompleted')) {
        throw new Error('data array has wrong key')
      }
      if (!isValueType(d.text, 'string') || !isValueType(d.isCompleted, 'boolean')) {
        throw new Error('data array has wrong value type')
      }
      return 0
    })
  }
}

function TodoList(data, selector) {
  if (!new.target) {
    throw new Error("you don't use new keyword")
  }
  this.data = data
  this.selector = selector
  this.render = function (selector) {
    check(this.data, this.selector)
    // const element = createElement(selector);
    // createElement 함수에서 innerHTML하는 부분은 제외했음. element가 data까지 의존하게 하고싶지 않았기 때문..
    document.getElementById(selector).innerHTML = `<ul>${this.data.map((d) => renderLi(d)).join('')}</ul>`
    // document.querySelector('body').appendChild(element);
  }
  this.setState = function (nextData) {
    this.data = nextData
    this.render(this.selector)
  }
  this.render(selector)
}

export default TodoList;
