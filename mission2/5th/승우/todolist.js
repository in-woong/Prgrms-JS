function TodoList(inputData, $target) {
  if (!(this instanceof TodoList)) {
    throw new Error('New 키워드 없이 함수를 실행하였습니다')
  }

  checkData(inputData)
  checkTarget($target)
  //   checkId(inputId)

  //   const $target = document.getElementById(inputId)
  this.data = inputData
  this.target = $target
  this.render = function() {
    $target.innerHTML = this.data
      .map(el => {
        if (el.isCompleted) {
          return `<li class="finished"><span>${el.text}</span><i class="far fa-check-square"></i><i class="far fa-square "></i></li>`
        } else {
          return `<li><span>${el.text}</span><i class="far fa-check-square "></i><i class="far fa-square"></i></li>`
        }
      })
      .join('')
  }
  this.setState = function(nextData) {
    checkData(nextData)
    this.data = nextData
    this.render()
  }

  //객체가 생성되면 바로 render함수를 실행시킨다.
  this.render()

  //Input Event
  const todoInput = document.getElementById('input-todo')
  todoInput.addEventListener('keydown', e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.data.push({ text: e.target.value, isCompleted: false })
      this.setState(this.data)

      //편의성을 위해
      e.target.value = ''
      e.target.focus()
    }
  })

  //List Click Event
  $target.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'I') {
      const list = e.target.parentNode
      const index = getIndex(list)
      parent.classList.toggle('finished')
      this.data[index].isCompleted = !this.data[index].isCompleted
      console.log(this.data[index])
    }
  })

  //클릭된 list의 index를 가져온다
  getIndex = $target => {
    const parent = $target.parentNode
    const index = Array.prototype.indexOf.call(parent.children, $target)
    return index
  }
}

///////////////////////////

// const checkId = id => {
//   const domWithGivenId = document.querySelector('#' + id)

//   if (domWithGivenId.length > 1 || domWithGivenId.length < 1) {
//     throw new Error('ID 값에 해당하는 DOM 엘리먼트가 존재하지 않습니다.')
//   }
// }
