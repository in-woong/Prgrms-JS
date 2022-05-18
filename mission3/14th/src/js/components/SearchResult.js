import {PRINT_NO_DATA} from '../utils/keywords.js';

export default function SearchResult({$root,target,setState}){
    const $parent = document.createElement('section');
    $parent.classList.add(target);
    $root.appendChild($parent);
    this.state=[];
    this.$parent = $parent;
    this.setState=setState;
    this.render=(list)=>{
        this.$parent.innerHTML= (list == null || list.length === 0 ) ? `<p>${PRINT_NO_DATA}</p>`
        : `<ul>
        ${list.reduce( (prev,{title,imageUrl})=> `${prev} <li><img src="${imageUrl}" alt="${title}"/></li>`,'' )}
        </ul>`
    }
    this.render(this.state);
}

