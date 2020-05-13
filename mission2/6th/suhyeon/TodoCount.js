class TodoCount {
    constructor({$element, totalCount, completedCount}) {
        validateElement($element)
        this.$element = $element
        this.totalCount = totalCount
        this.completedCount = completedCount
        this.render()
    }
    render() {
        this.$element.innerHTML = `총 개수: ${this.totalCount}, 완료: ${this.completedCount}개`
    }
    setState(totalCount, completedCount) {
        this.totalCount = totalCount
        this.completedCount = completedCount
        this.render()
    }
}
export default TodoCount
