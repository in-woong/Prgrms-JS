const studyData = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
const eatData = [
  {
    text: '치킨 먹기',
    isCompleted: true,
  },
  {
    text: '피자 먹기',
    isCompleted: false,
  },
]

const watchData = [
  {
    text: '팬레터 보기',
    isCompleted: false,
  },
  {
    text: '김종욱찾기 보기',
    isCompleted: false,
  },
]

let nexData = [
  {
    text: '보너스 구현 마지막 작성하기',
    isCompleted: false,
  },
  {
    text: '자바 공부하기',
    isCompleted: true,
  },
]

function init() {
  const app = new App('toStudy-list', 'toStudy-count', 'todo-input')
}

init()
