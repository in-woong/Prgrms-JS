import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {INSTANCE_NOT_CREATED} from '../utils/keywords.js';
export default function TodoCount({$parentElement,state,setState}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoCount)){
            throw(INSTANCE_NOT_CREATED);
        }
        const $section = document.createElement('section');
        $section.classList.add('count__todo__section');
        $parentElement.appendChild($section);
        
        this.state=state;
        this.setState=setState;

        this.render=({completeTodoCount=0,totalTodoCount=0}) => {
            $section.innerHTML=`<span>${completeTodoCount}/${totalTodoCount}</span>`
        }
        this.render(state);

    }catch(e){
        console.error(e);
        alert(e);
    }
}

