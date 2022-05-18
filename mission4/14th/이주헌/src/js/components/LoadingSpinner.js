import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {INSTANCE_NOT_CREATED,LOADING_TEXT} from '../utils/keywords.js';
export default function LoadingSpinner($root){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(LoadingSpinner)){
            throw(INSTANCE_NOT_CREATED);
        }
        const $parentElement = document.createElement('section');
        $parentElement.classList.add('loading__section','hide');
        
        const $div = document.createElement('div');
        $div.classList.add('loading__section__text')
        
        const $p = document.createElement('p');
        $p.innerHTML=`${LOADING_TEXT}`;

        $div.appendChild($p);
        $parentElement.appendChild($div);

        $root.appendChild($parentElement);

        this.startSpinner=()=>{
            $parentElement.classList.toggle('hide');
        }
        this.stopSpinner=()=>{
            $parentElement.classList.toggle('hide');
        }
    }catch(e){
        console.error(e);
        alert(e);        
    }
}