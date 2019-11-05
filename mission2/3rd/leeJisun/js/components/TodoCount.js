export function TodoCount(data) {
  this.setState = nextData => {
    data = nextData
    render(data)
  }

  // render
  const render = () => {
    const totalCount = data.length
    let completeCount = 0
    for (let i in data) {
      if (data[i].isCompleted) completeCount += 1
    }

    document.getElementById('count-total').innerHTML =
      '전체 todo: ' + totalCount + '개'
    document.getElementById('count-complete').innerHTML =
      '완료 todo: ' + completeCount + '개'
  }
}
