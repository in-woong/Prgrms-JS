import { $, isDataValid } from '../../utils/index.js';

export class TodoList {

    constructor({ todos, setCount }) {
        isDataValid({ todos });
        this.todos = todos;
        this.setCount = setCount;
        this.$todoList = $('#todo--container');
        this.$footer = $('footer');
    }

    generateToHTML() {
        return `<ul>${this.todos.map(({ id, text, isCompleted }) =>
                    `<li class="todo--list" data-key=${id}>${(isCompleted) ? `<s>${text}</s>` : text}<button>삭제</button></li>`).join('')}
                </ul>`;
    }

    /**
     * setState
     * 
     * 변경된 todo의 상태값을 반영하고, 
     * todo count를 반영한다.
     * 
     * @param {Array} todos 
     */

    setState({ todos }) {
        isDataValid({ todos });

        this.todos = todos;
        this.setCount({ todos: this.todos });
        this.render();
    }

    /**
     * registerTodoEvent
     * 
     * Todo의 삭제 그리고 상태 변경 이벤트를 등록합니다.
     * 
     * @param {Function} removeOneTodo
     * @param {Function} changeDoneTodo
     */

    registerTodoEvent({removeOneTodo, changeDoneTodo}) {
        this.$todoList.addEventListener('click', (e) => {
            const { target } = e;
            const closestTargetTag = target.closest('li');
            const isTarget = closestTargetTag.className === 'todo--list';

            if (isTarget) {
                const tag = e.target.tagName;
                const idx = closestTargetTag.getAttribute('data-key');

                if (tag === 'BUTTON') {
                    removeOneTodo({ idx });
                    return;
                }

                if (tag === 'LI' || tag === 'S') {
                    changeDoneTodo({ idx });
                    return;
                }
            }
        });
    }


    render() {
        this.$todoList.innerHTML = this.generateToHTML();
    }
}