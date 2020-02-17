//todo.js
//Data Validation
function ValidateData(data, $target) {
  this.checkData = function(data) {
    if (!data) {
      throw new Error('Data를 입력해주세요')
    }
    if (!Array.isArray(data)) {
      throw new Error('Data가 배열이 아닙니다')
    }

    //처음 데이터를 빈배열로 초기화시키기 때문에 빈 배열을 체크하는 구문은 제거했습니다.
    // if (data.length <= 0) {
    //   throw new Error('Data가 빈 배열입니다')
    // }

    for (const item of data) {
      if (
        !item.text ||
        !item.hasOwnProperty('isCompleted') ||
        typeof item.text !== 'string'
      ) {
        throw new Error('Data안의 데이터들이 올바르지 않습니다.')
      }
    }
  }

  this.checkTarget = function($target) {
    if ($target === null) {
      throw new Error('해당 엘리먼트가 존재하지 않습니다')
    }
  }
  this.checkData(data)
  this.checkTarget($target)
}

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
  this.render()
}

//App.js
function App($container) {
  this.$container = $container
  this.data = []

  this.initialize = function() {
    //데이터를 로드하는 로직 추가
    // loadData()

    //data validation 함수
    // checkData(data)
    // checkTarget($container)
    //질문정리중 :::: 데이터 체크 하는 함수들을 하나의 컴포넌트로 묶었는데
    //혹시 이런 구문 괜찮은지?!
    new ValidateData(data, $container)

    //todo 객체 생성
    this.todo = new TodoList(this.data, this.$container)

    //input Event
    const $inputTodo = document.getElementById('input-todo')
    $inputTodo.addEventListener('keydown', e => {
      //입력된 키가 'enter'이고, 입력된 값이 비어있지 않으면
      if (e.keyCode === 13 && e.target.value !== '') {
        // this.setState([{ text: e.target.value, isCompleted: false }])
        this.setState([new TodoData(e.target.value)])
        //질문정리중 :::: 여기서 this.data를 콘솔로 찍으면 push한 newData만 TodoData라고 앞에 표시된다.
        //실행시엔 문제가 없는데 혹시 괜찮은 방법인지 궁금합니다.

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

  //setState
  this.setState = function(newData) {
    //질문정리 ::::: 이곳에서는 $target을 검사하지 않고 newdata만 검사하고 싶은데 매개변수 하나 빠드려도 괜찮은가요??
    new ValidateData(newData)
    //this.data.push(newData) => newData에 객체가 들어갈경우
    this.data = [...this.data, ...newData]
    this.todo.setState(this.data)
  }

  //Data Load function

  //클릭된 list의 index를 가져온다
  this.getIndex = $target => {
    const parent = $target.parentNode
    const index = Array.prototype.indexOf.call(parent.children, $target)
    return index
  }

  this.initialize()
}
