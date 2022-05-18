import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {INSTANCE_NOT_CREATED} from '../utils/keywords.js';
export default function TodoList({$parentElement,state,setState,onClick,onDragStart,onDrop}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(TodoList)){
            throw(INSTANCE_NOT_CREATED);
        }
        const $section = document.createElement('section');
        $section.classList.add('list__todo__section');
        $parentElement.appendChild($section);
        this.render=(list)=>{
            const todoListHTML =  list == null ? '' : list.reduce((prev,{_id,content,isCompleted},index)=>{
                return `${prev}
                <li data-id=${_id} draggable="true">
                ${isCompleted ? `<s>${content}</s>`: content}
                <button class="deleteBtn">삭제</button>
                </li>`;
            },''); 
            
            $section.innerHTML=`${todoListHTML ? `<ul>
            ${todoListHTML}
            </ul>` : `<span>할일을 등록해보세요.</span>`} `;
            
        }
        this.bindEvent=()=>{
            //할일삭제 + isComplete 삭선처리 이벤트
            $section.addEventListener('click',onClick);
            $section.addEventListener('dragstart',onDragStart);
            $section.addEventListener('dragover',e=> e.preventDefault() );
            $section.addEventListener('drop',onDrop);
        }
        this.state=state;
        this.setState=setState;
        
        this.render(state);
        this.bindEvent();

        

    }catch(e){
        alert(e);
    }
}
