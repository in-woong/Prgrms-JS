//todo.js
//Data input을 위해 객체 생성자 함수 정의
function TodoData(text) {
  this.text = text
  this.isCompleted = false
  //   let obj = {
  //     text: text,
  //     isCompleted: false,
  //   }
  //   return obj
}

function TodoList(data, $container) {
  //data validation 함수

  this.data = data
  this.$container = $container

  //그리는 함수
  this.render = function() {
    this.$container.innerHTML = this.data
      .map(d =>
        d.isCompleted
          ? `<li class="checked">${d.text}<span class="icon-check"></span></il>`
          : `<li>${d.text}<span class="icon-check-empty"></span></li>`
      )
      .join('')
  }

  //갱신 함수
  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }
  this.render()
}

//App.js
function App() {
  //Data load function
  //임시 데이터
  const tempData = [
    {
      text: 'JS공부하기',
      isCompleted: false,
    },
    {
      text: 'JS복습',
      isCompleted: true,
    },
  ]
  this.data = tempData
  this.$container = document.querySelector('#todo-list')

  //todo 객체 생성
  this.todo = new TodoList(this.data, this.$container)

  this.initialize = function() {
    //데이터를 로드하는 로직 추가

    //input Event
    const $inputTodo = document.getElementById('input-todo')
    $inputTodo.addEventListener('keydown', e => {
      //입력된 키가 'enter'이고, 입력된 값이 비어있지 않으면
      if (e.keyCode === 13 && e.target.value !== '') {
        //data 배열에 새로 입력된 데이터를 추가
        // this.data.push({ text: e.target.value, isCompleted: false })
        this.data.push(new TodoData(e.target.value))
        //질문1 여기서 this.data를 콘솔로 찍으면 push한 newData만 TodoData라고 앞에 표시된다.
        //입력된 값으로 렌더링
        this.todo.setState(this.data)
        // this.setState(new TodoData(e.target.value))
        console.log(this.data)

        //편의성을 위해
        e.target.value = ''
        e.target.focus()
      }
    })

    //List Click Event
    //새로 추가되는 Element에도 이벤트를 추가하기 위해 이벤트 위임을 사용
    this.$container.addEventListener('click', e => {
      if (e.target.nodeName === 'SPAN') {
        //check된거는 check 해제, check 안된거는 check
        //this.data의 isComleted값을 갱신해주는 함수
        const checkValue = this.toggleComplete(e.target.parentNode)
        //checkValue가 true라면 체크가 된것이므로 박스를 체크하고, 삭선을 긋는다.
        if (checkValue) {
          e.target.className = 'icon-check'
          e.target.parentNode.className = 'checked'
        } else {
          e.target.className = 'icon-check-empty'
          e.target.parentNode.className = ''
        }

        console.log(this.data)
      }
    })
  }

  //   //렌더링 함수
  //   this.setState = newData => {
  //     this.data.push(newData)
  //     this.todo.setState(this.data)
  //   }

  //isCompleted 갱신하는 함수
  //클릭된 list의 index를 가져와서 data배열에 접근후 인덱스에 해당하는 객체에 접근후 isCompleted값을 바꾼다.
  this.toggleComplete = $target => {
    const parent = $target.parentNode
    const index = Array.prototype.indexOf.call(parent.children, $target)
    const currentData = this.data[index]
    //true는 false로 false는 true로
    currentData.isCompleted = !currentData.isCompleted
    return currentData.isCompleted
  }

  this.initialize()
}

new App()
