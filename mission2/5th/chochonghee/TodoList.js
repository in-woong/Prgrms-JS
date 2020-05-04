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
let idNum = 0

function TodoList($divName, data) {
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
          <button id="delBtn" value=${item.id}>X</button></div>`
      )
      .join('')

    // 목록 삭제
    const $delBtns = document.querySelectorAll('#delBtn')
    $delBtns.forEach(delbtn => {
      delbtn.addEventListener('click', e => {
        this.deleteTodo(event.target.value)
      })
    })

    this.deleteTodo = todoId => {
      console.log(todoId)
      const nextData = data.filter(item => item.id !== parseInt(todoId))
      this.data.splice(parseInt(todoId), 1)
      todoList.newSetState(nextData)
    }

    idNum = 0
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].id = idNum++
    }
  }

  // 새로운 데이터를 받아서 이어서 화면에 렌더링
  this.setState = nextData => {
    $divName.innerHTML = ''
    for (var i = 0; i < nextData.length; i++) {
      nextData[i].id = idNum++
      data.push(nextData[i])
    }
    this.data = data
    this.render()
  }

  this.newSetState = nextData => {
    $divName.innerHTML = ''
    this.data = nextData
    this.render()
  }

  this.render()
}

export default { TodoList }