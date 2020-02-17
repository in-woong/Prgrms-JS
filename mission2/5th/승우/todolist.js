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
          ? `<li class="checked">${d.text}<span><i class="far fa-check-square"></i><i class="far fa-square not-show"></i></span></li>`
          : `<li>${d.text}<span><i class="far fa-check-square not-show"></i><i class="far fa-square"></i></span></li>`
      )
      .join('')
  }

  //갱신 함수
  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }
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
  // this.data = tempData

  this.initialize = function() {
    //데이터를 로드하는 로직 추가
    //this.data = loadedData
    this.data = []
    this.$container = document.querySelector('#todo-list')

    //todo 객체 생성
    this.todo = new TodoList(this.data, this.$container)

    //input Event
    const $inputTodo = document.getElementById('input-todo')
    $inputTodo.addEventListener('keydown', e => {
      //입력된 키가 'enter'이고, 입력된 값이 비어있지 않으면
      if (e.keyCode === 13 && e.target.value !== '') {
        //data 배열에 새로 입력된 데이터를 추가
        // this.data.push({ text: e.target.value, isCompleted: false })
        this.data.push(new TodoData(e.target.value))
        //질문정리중 :::: 여기서 this.data를 콘솔로 찍으면 push한 newData만 TodoData라고 앞에 표시된다.
        //실행시엔 문제가 없는데 혹시 괜찮은 방법인지 궁금합니다.
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
      if (e.target.nodeName === 'I') {
        //index를 통해 data[index]에 접근, isCompleted변수의 값을 체크한 다음 체크, 혹은 체크 해제
        const i = e.target
        //i의 리스트
        const iList = e.target.parentNode.children
        //i->span->li
        const li = e.target.parentNode.parentNode
        const index = this.getIndex(li)

        //index를 통해 접근해서 this.data[index]의 isCompleted의 값을 체크
        //질문 정리중 ::::: 애로우 함수를 사용해서 this를 사용할 수 없기에 e.target을 사용하고, e.target의 sibling에 접근하기위해
        //children 배열을 이용해 접근했는데 코드가 너무 깔끔하지 못한 것 같습니다.
        //그리고 fontawesome을 이용하고 여기에 Class를 주어 check된 상태와 아닌 상태를 구분했는데
        //멘토님들은 어떻게 하셨을지
        //혹시 더 깔끔하고 좋은 방법이 있을지 궁금합니다.
        if (this.todo.data[index].isCompleted) {
          //isCompleted가 'true'일 경우
          li.className = ''
          this.todo.data[index].isCompleted = false
          e.target.classList.add('not-show')
          iList[1].classList.remove('not-show')
        } else {
          li.className = 'checked'
          this.todo.data[index].isCompleted = true
          e.target.classList.add('not-show')
          iList[0].classList.remove('not-show')
        }
      }
    })
  }

  //   //렌더링 함수
  //   this.setState = newData => {
  //     this.data.push(newData)
  //     this.todo.setState(this.data)
  //   }

  //클릭된 list의 index를 가져온다
  this.getIndex = $target => {
    const parent = $target.parentNode
    const index = Array.prototype.indexOf.call(parent.children, $target)
    return index
  }

  this.initialize()
}

new App()
