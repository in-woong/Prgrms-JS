export class TodoList {
    constructor({ $target, todos, onToggle, onRemove }) {
        this.$todoContainer = $target;
        [this.$todoLeft, this.$todoDone] = [...$target.children];
        this.todos = todos;
        this.onToggle = onToggle;
        this.onRemove = onRemove;
        this.registerTodoEvent();
    }

    registerTodoEvent() {
        this.$todoContainer.addEventListener('click', async ({ target }) => {
            const tagName = target.tagName;
            const $todo = target.closest('li');

            if (!$todo) return;

            const dataSet = $todo.dataset.key;

            if (tagName === 'LI' || tagName === 'S') { 
                await this.onToggle({ key: dataSet });
                return;
            }

            if (tagName === 'BUTTON') { 
                await this.onRemove({ key: dataSet });
                return;
            }
        });

        this.$todoContainer.addEventListener('dragstart', (e) => {
            const key = e.target.dataset.key;

            e.dataTransfer.setData("text/plain", JSON.stringify({ key }));
        });

        this.$todoContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            const $container = e.target.closest('div');

            $container.classList.add('over');
        });

        this.$todoContainer.addEventListener('dragleave', (e) => {
            e.preventDefault();
            const $container = e.target.closest('div');

            $container.classList.remove('over');
        });

        this.$todoContainer.addEventListener('drop', async (e) => {
            e.preventDefault();

            const data = e.dataTransfer.getData("text/plain");
            const { key } = JSON.parse(data);

            this.$todoDone.classList.remove('over');
            this.$todoLeft.classList.remove('over');

            await this.onToggle({ key });
        });

    }
    
    classifyTodos() {

       return this.todos.reduce((acc, todo) => {
            const [doneTodos, leftTodos] = acc;

            if (todo.isCompleted) doneTodos.push(todo);
            else leftTodos.push(todo);

            return acc;
        }, [[], []]);
    }

    generateHTML({ $target, todos }) {

        $target.innerHTML = `
            <ul class="todo--list">
                ${todos.map(({ _id, content, isCompleted }) =>
                ` <li class="todo--list" data-key="${_id}" draggable="true">
                        ${isCompleted ? `<s>${content}</s>` : content}
                        <button>삭제</button>
                    </li>
                `).join('')}
            </ul>
          `
    }

    render() { 
        const [doneTodos, leftTodos] = this.classifyTodos();

        this.generateHTML({ $target: this.$todoLeft, todos: leftTodos });
        this.generateHTML({ $target: this.$todoDone, todos: doneTodos });
    }

    setState({ todos }) { 
        this.todos = todos;
        this.render();
    }
}
