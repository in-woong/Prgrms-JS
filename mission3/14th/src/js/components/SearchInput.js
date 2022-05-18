import {SEARCH_TEXT_PLACEHOLDER} from '../utils/keywords.js';



export default function SearchInput({$root,onInput}){
    const $parent = document.createElement('section');
    
    $parent.classList.add('search__section');
    $root.appendChild($parent);
    this.$parent=$parent;
    
    this.render=()=>{
        this.$parent.innerHTML=`<input type="text" placeholder="${SEARCH_TEXT_PLACEHOLDER}">`;
    }    
    this.bindEvent=()=>{
        this.$parent.addEventListener('input',onInput);
    }
    
    this.render();
    this.bindEvent();
}

