class TodoCount {
  constructor(countId) {
    this.countTag = this.getCountTag(countId)
  }

  getCountTag(countId) {
    const countTag = document.getElementById(countId)
    if (!countTag) throw new Error(`Invalid count tag id: ${countId}`)
    return countTag
  }

  setCount(todos) {
    const todoNo = todos.length
    const completeNo = todos.reduce((prev, current) => {
      if (current.isCompleted) {
        prev += 1
      }
      return prev
    }, 0)

    this.countTag.innerHTML = `할일 갯수: ${todoNo}, 완료된 할일: ${completeNo}`
  }
}
