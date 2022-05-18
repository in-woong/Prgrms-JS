import {isCreateInstance as _isCreateInstance} from './Validation.js';

export function TodoCount({parentElement}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoCount)){
            throw('Cannot Create Instance');
        }
        this.$parentElement=parentElement;
    }catch(e){
        console.error(e);
        return null; 
    }
}

TodoCount.prototype.init=function(){
    this.render({});
}

TodoCount.prototype.render=function({completeTodoCount=0,totalTodoCount=0}){
    this.$parentElement.innerHTML=`<span>${completeTodoCount}/${totalTodoCount}</span>`
}
