const isCountInteger = data => {
  return data && isInteger(data)
}

function TodoCount($element, data) {
  if (!(this instanceof TodoCount)) {
    throw new Error('[TodoCount] new 키워드로 실행되지 않았습니다.')
  }

  if (
    !data ||
    !isCountInteger(data.totalCount) ||
    !isCountInteger(data.totalCount)
  ) {
    throw new Error('[TodoCount] 필요한 데이터를 전달받지 못했습니다.')
  }

  this.$element = $element
  this.data = data

  this.render = function() {
    this.$element.innerHTML = `<span>총 <b>${this.data.totalCount}개</b>의 할 일 중 <b>${this.data.completedCount}개 </b> 완료!</span>`
  }

  this.setState = function(newData) {
    this.data = newData
    this.render()
  }

  this.render()
}
