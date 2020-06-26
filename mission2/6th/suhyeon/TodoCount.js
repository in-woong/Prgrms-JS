class TodoCount {
    constructor({$element, data}) {
        validateElement($element)
        this.$element = $element   
        this.totalCount = data.length
        this.completedCount = this.getCompletedCount(data)
        this.render()
    }
    render() {
        this.$element.innerHTML = `총 개수: ${this.totalCount}, 완료: ${this.completedCount}개`
    }
    setState(data) {
        this.totalCount = data.length
        this.completedCount = this.getCompletedCount(data)
        this.render()
    }
    getCompletedCount(data){
        return data.filter(todo => todo.isCompleted).length
    }
}
export default TodoCount
