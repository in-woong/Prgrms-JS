import {isCreateInstance as _isCreateInstance} from './Validation.js';

export function TodoInput({parentElement,addTodo,removeAll}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoInput)){
            throw('Cannot Create Instance');
        }

        this.$parentElement=parentElement;
        TodoInput.prototype.addTodo = addTodo;
        TodoInput.prototype.removeAll = removeAll;
        

    }catch(e){
        console.error(e);
        return null; 
    }
}
/**
 * @description TodoInput 최초실행할때 진입함수.
 * 
 */
TodoInput.prototype.init=function(){
    this.render();
    this.bindEvent();
}

/**
 * 
 * @description TodoInput 이벤트 정의
 */
TodoInput.prototype.bindEvent=function(){
    //텍스트 추가 이벤트
    this.$parentElement.addEventListener('submit',event=>{
        event.preventDefault();
        const $input = event.target.querySelector('input');
        const value = $input.value.trim();
        if( value ){
            this.addTodo({text:value,isCompleted:false});
            $input.value='';
            $input.focus();
        }
    });
    const $removeAll = this.$parentElement.querySelector('.todo__remove__all');

    const removeAllEvent = new CustomEvent('removeAll',{detail:null});
    $removeAll.addEventListener('removeAll',this.removeAll);

    $removeAll.addEventListener('click',(event)=>{
        event.target.dispatchEvent(removeAllEvent);
    })
}

//가독성 향상을 위한 render함수 수정 ul태그는 감싸고 있고 reduce는 reduce의 관심사대로 드러날수있게.
/**
 * 
 * @description TodoInput 컴포넌트 render
 */
TodoInput.prototype.render=function(){
    this.$parentElement.innerHTML=`<form>
        <input type="text"/>
        <button type="submit" class="todo__submit">추가</button>
        <button type="button" class="todo__remove__all">전체삭제</button>
    </form>`;
}

