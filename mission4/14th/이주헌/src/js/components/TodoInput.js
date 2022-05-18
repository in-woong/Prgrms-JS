import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {INSTANCE_NOT_CREATED} from '../utils/keywords.js';
export default function TodoInput({$parentElement,onSubmit,removeAll}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoInput)){
            throw(INSTANCE_NOT_CREATED);
        }
        const $section = document.createElement('section');
        $section.classList.add('input__todo__section');
        $parentElement.appendChild($section);

        this.bindEvent=()=>{
            //텍스트 추가 이벤트
            $section.addEventListener('submit',onSubmit);
            const $removeAll = $section.querySelector('.todo__remove__all');
        
            const removeAllEvent = new CustomEvent('removeAll',{detail:null});
            $removeAll.addEventListener('removeAll',removeAll);
        
            $removeAll.addEventListener('click',(event)=>{
                event.target.dispatchEvent(removeAllEvent);
            })
        }
        this.render=()=>{
            $section.innerHTML=`<form>
                <input type="text"/>
                <button type="submit" class="todo__submit">추가</button>
                <button type="button" class="todo__remove__all">전체삭제</button>
            </form>`;
        };

        this.render();
        this.bindEvent();
    }catch(e){
        console.error(e);
        alert(e);
    }
}

