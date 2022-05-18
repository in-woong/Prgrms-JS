import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {INSTANCE_NOT_CREATED} from '../utils/keywords.js';

export default function Users({$parentElement,state,onChange,getSelectedUser,setState}){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(Users)){
            throw(INSTANCE_NOT_CREATED);
        }
        const $section = document.createElement('section');
        $section.classList.add('todo__users__section');
        $parentElement.appendChild($section);
        this.state=state;
        this.render=(users)=>{
            $section.innerHTML=`
            <label for="todo__users__combobox">사용자 선택 : </label>
            <select id="todo__users__combobox">
            ${users.map(user=>`<option value='${user}'>${user}</option>`).join('') }
            </select>
            `
        }
        this.bindEvent=()=>{
            $section.querySelector('#todo__users__combobox').addEventListener('change',onChange);
        }
        this.setState=setState;
        this.render(state);
        this.bindEvent();
        this.getSelectedUser = getSelectedUser;
        
    }catch(e){
        console.error(e);
        alert(INSTANCE_NOT_CREATED);
    }
}
