import {PRINT_NO_SEARCH_HISTORY} from '../utils/Keywords.js';

export default function SearchHistory({$root,initState,onClickKeyword}){
    const $parent = document.createElement('section');
    $root.appendChild($parent);
    
    this.$parent = $parent;
    this.state = initState;
    this.render = (list)=>{
        this.$parent.innerHTML= (list == null || list.length === 0 ) ? `<p>${PRINT_NO_SEARCH_HISTORY}</p>`
        : `<ul>
        ${list.reverse().reduce( (prev,curr)=> `${prev} <li>${curr}</li>`,'' )}
        </ul>`
    
    }
    this.bindEvent=()=>{
        this.$parent.addEventListener('click',onClickKeyword)
    }
    this.render(initState || []);
    this.bindEvent();
}