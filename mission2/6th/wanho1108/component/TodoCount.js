export default function TodoCount() {
  if (!(this instanceof TodoCount)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  this.$element = document.createElement('div')

  this.render = (length, completedLength) => {
    this.$element.innerHTML = `총 ${length} 할 일 목록중 ${completedLength}개 완료했습니다.`
  }
}
