
export default function TodoList(data, $target, removeTodo , reverseTodo) {
    this.data = data
    this.$target = $target;

    this.removeTodo = removeTodo;
    this.reverseTodo = reverseTodo;

    addEventListener('click', (e) => {
        const idNum = e.target.id;

        if (e.target.className === 'remove-btn') {
            this.removeTodo(idNum)
        }

        else if (e.target.className === 'todo-item') {
            this.reverseTodo(idNum)
        }
    })

    this.render = () => {
        let htmlString = '<ul>'
        htmlString += this.data.map(({ text, isCompleted },idx) => isCompleted ? 
                        `<s><li id='${idx}' class="todo-item">${text}<button id='${idx}' class="remove-btn" >X</button></li></s>`
                        : `<li id='${idx}' class="todo-item">${text}<button id='${idx}' class="remove-btn" >X</button></li>`)
                    .join('')
        
        htmlString += '</ul>'
        $target.innerHTML = htmlString;
    }

    this.setState = (nextState) => {
        this.data = nextState
        this.render()
    }

    this.render();
}

