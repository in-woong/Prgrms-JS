import { checkArray, checkTarget, checkNewKeyword, checkTypes } from './validation.js'

export default function TodoList(data, $target, removeTodo , reverseTodo) {
    this.data = data
    this.$target = $target;

    this.removeTodo = removeTodo;
    this.reverseTodo = reverseTodo;

    this.validation = (data) => {
        checkArray(data);
        checkTarget($target);
        checkNewKeyword(this);
        checkTypes(data
            , ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean')
    }


    $target.addEventListener('click', (e) => {
        const idNum = e.target.id;

        if (e.target.className === 'remove-btn') {
            this.removeTodo(idNum)
        }

        else if (e.target.className === 'todo-item') {
            this.reverseTodo(idNum)
        }
    })

    // this.removeTodo = (idx) => {
    //     this.data.splice(idx,1);
    //     this.render();
    // }

    // this.reverseTodo = (idx) => {
    //     let data = this.data[idx];
    //     data.isCompleted = !data.isCompleted
    //     this.render();
    // }


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
        this.validation(nextState)
        this.data = nextState
        this.render()
    }

    this.validation(this.data);
    this.render();
}

