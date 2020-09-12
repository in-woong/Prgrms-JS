function TodoCount(data, $total, $completed) {
    this.data = data;
    this.$total = $total;
    this.$completed = $completed;

    this.count = () => {
        const totalNum = this.data.length;
        this.$total.innerHTML = `총 ${totalNum} 개`

        const completedTodoArr = this.data.filter(todo => todo.isCompleted == true);
        this.$completed.innerHTML = `완료 ${completedTodoArr.length}개`
    }
    this.setState = (nextData) => {
        this.data = nextData;
        this.count();
    }
    this.count();
}

export default TodoCount;