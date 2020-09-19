// TodoList data배열 객체의 파라미터가 text, isCompleted가 있으면 true 없으면 false를 리턴
const isCorrectData = (value) => {
  typeof value.text === 'string' && typeof value.isCompleted === 'boolean'
}
// TodoList data체크 함수
export default function todoListDataCheck(data) {
  if (!data) {
    if (!typeof data === 'boolean') {
      throw new Error('데이터가 null이거나 undefined상태입니다')
    }
  }
  if (!Array.isArray(data)) {
    throw new Error('데이터가 array상태가 아닙니다')
  }
  // 배열의 요소중 하나라도 text, isCompleted프로퍼티중 하나가 없다면 false를 반환하여 error를 발생
  if (!data.length === 0) {
    if (!data.every(isCorrectData)) {
      throw new Error('데이터 내용이 이상합니다')
    }
  }
}
