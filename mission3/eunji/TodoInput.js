function TodoInput(data) {
    // this.$targetValue = $target.value
    this.data = data;

    this.addTodoList = function (value) {
        if(value.length > 0){
            this.data.push({
                text:value,
                isCompleted: false
            });
            console.log('todoInput data',this.data)
           return this.data
        }
    }
}