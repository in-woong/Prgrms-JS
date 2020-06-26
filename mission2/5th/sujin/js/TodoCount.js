function TodoCount (todoCount) {
    const $todoCount = document.querySelector('#todo-count')
    const $todoSuccessCount = document.querySelector('#todo-success-count')
    let successCount = 0

    this.render = function() {
        $todoCount.innerHTML = `<p>todoCount: ${todoCount}</p>`
        $todoSuccessCount.innerHTML = `<p>todoSuccessCount: ${successCount}</p>`
    }

    this.setState = function (nextData) {
        todoCount = nextData.data.length
        successCount = this.SuccessCount(nextData)
        this.render()
    }

    this.SuccessCount = function (TodoList) {
        successCount = 0
        Array.from(TodoList.$el.querySelectorAll('li')).forEach( li => {
            if ( li.querySelector('del')) {
                successCount += 1
            }
        })
        return successCount
    }
}
export default TodoCount
