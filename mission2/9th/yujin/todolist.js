import { checkArray, checkTarget, checkNewKeyword, checkTypes } from './validation.js'

export default function TodoList(data, $target) {
    this.data = data
    this.$target = $target;

    this.validation = (data) => {
        checkArray(data);
        checkTarget($target);
        checkNewKeyword(this);
        checkTypes(data
            , ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean')
    }
    
    //add
    document.querySelector('#input-todo').addEventListener('keydown', (e) => {
        if(e.key === "Enter") {
            this.addTodo(e.target);
        } 
    })
    
    document.querySelector('#button-add').addEventListener('click', () => {
       this.addTodo(document.querySelector('#input-todo'));           
    })

    //delete 
    $target.addEventListener('click' , (e ) => {
        const idNum = e.target.id;
    
        if(e.target.className === 'remove-btn'){
            this.removeTodo(idNum)
        }

        else if(e.target.className === 'todo-item'){
            this.reverseIsCompleted(idNum)
        }
    })



    this.addTodo = ($input_target) => {
        const newInputData = {
            text : $input_target.value,
            isCompleted : false,
        }
        this.setState([...this.data , newInputData])
        $input_target.value = "";
        $input_target.focus();
    }


    this.removeTodo = (idx) => {
        this.data.splice(idx,1);
        this.render();
    }

    this.reverseIsCompleted = (idx) => {
        let data = this.data[idx];
        data.isCompleted = !data.isCompleted
        this.render();
        
    }
    

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

