## MISSION-1

- 명령형 프로그래밍
  modalShow()
  render()
  modalHide()
  이와 같이 ~을 하라 라는 형태의 프로그래밍

- 선언형 프로그래밍
  컴포넌트는 자신의 상태를 갖고 있고, 이 상태가 변할 때마다 이 상태를 기준으로 rendering
  render 함수는 현재 상태를 기준으로, `아무런 파라메터없이` 렌더링 해야하는 규칙을 일관적으로 유지되어야
  유지보수가 편하고 확장이 가능한다

class TodoList() {
contructor() {

}
render() {

}
}

const checkNewKeyword = context => {
if(context === window) {
throw new Error('new')
}
}

const checkEmptyData = data => {
if(!data) throw new Error('data')
}

function TodoList(data, $target) {
  this.data = data;
  this.$target = \$target;

//데이터 검증
checkNewKeyword(this)
checkEmptyData(data)

this.render = () => {
const html = this.data.map(({ isCompleted, text }) => isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`).join('')
this.\$target.innerHTML =html
}
this.render()
}

- 가독성을 높이는 코딩 컨벤션

* 변수명 || 함수명으로 역할을 명시하기
* 함수는 `한 가지` 기능
