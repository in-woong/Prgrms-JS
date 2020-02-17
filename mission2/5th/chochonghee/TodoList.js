const $inputBox = document.querySelector('#js-inputBox')
const $todoListElement = document.querySelector('#todo-list')

let toDos = []

// 데이터 객체의 속성 체크
const propertyChk = data => {
    for (let item in data) {
        if (
            typeof data[item].text !== 'string' ||
            typeof data[item].isCompleted !== 'boolean'
        )
            return false
    }
    return true
}

// TodoList 생성자
function TodoList(data, $divName) {
    this.data = data
    this.$divName = $divName

    try {
        // 객체인지 체크
        if (typeof this !== 'object') {
            throw new Error(
                "TodoList를 생성하기 위해서는 'new' keyword를 사용해야합니다."
            )
        }
        // 넘어온 데이터의 값이 유효한지/속성이 맞는지/리스트형태인지 체크
        if (!this.data || !propertyChk(this.data)) {
            throw new Error(`데이터의 값이 유효하지 않습니다.`)
        } else if (!Array.isArray(this.data)) {
            throw new Error(`데이터는 리스트형태여야 합니다. data: ${typeof data}`)
        }
    } catch (error) {
        alert(error.message)
    }

    // 화면에 렌더링
    this.render = () => {
            this.$divName.innerHTML += this.data
                .map(
                    item =>
                    `<div id="todo">
        ${item.isCompleted ? `<del> ${item.text} </del>` : item.text}
          <span id="mark">X</span></div>`
      )
      .join('')
    this.data.forEach((item, index) => {
      toDos.push(item)
    })

    const $listSelector = document.querySelectorAll('#todo')
    $listSelector.forEach((item, index) => {
      item.addEventListener('click', event => {
        toDos[index].isCompleted = true
        item.innerHTML = `<div><del>${toDos[index].text}</del> <span id="mark">X</span></div>`
      })
    })

    // 리스트 삭제
    const $mark = document.querySelectorAll('#mark')
    $mark.forEach((item, index) => {
      item.addEventListener('click', event => {
        console.log(event)
        $todoListElement.removeChild(event.target.parentNode)
        // toDos 의 요소를 삭제하는 방법..??
      })
    })
  }

  // 새로운 데이터를 받아서 이어서 화면에 렌더링
  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.render()
}

// 할 일 추가하기
$inputBox.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault()
    const todo = [{ text: $inputBox.value, isCompleted: false }]
    todoList.setState(todo)
    $inputBox.value = ''
  }
})