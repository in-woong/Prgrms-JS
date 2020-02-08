function TodoItem({ item }) {
    this.render = () => {
        return `
            <li class="${item.isCompleted ? 'todo-list-item completed' : 'todo-list-item'}"
                data-id="${item._id}">
                <span>${item.content}</span>
                <button>삭제</button>
            </li>
        `;
    }
}

export default TodoItem;
