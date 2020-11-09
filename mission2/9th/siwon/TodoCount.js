// TodoCount : 총 Todo의 개수, 완료처리된 Todo의 개수를 표시함
export default function TodoList(data, $todoCount) {
    this.$todoCount = $todoCount;

    this.countCompleted = (data) => {
        const completedTodoCount = data.reduce((pre, { text, isCompleted }) => {
            if (isCompleted) {
                pre += 1;
            }
            return pre;
        }, 0);

        this.$todoCount.innerHTML = `<span class="todo-count">${completedTodoCount} out of ${data.length} tasks are done</span>`;
    }

    this.countCompleted(data);
}
