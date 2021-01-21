import {debounce} from './debounce.js'

export default function SearchInput ({$app , onSearch}) {

    this.$target = document.createElement('input');
    this.$target.className = 'SearchInput';
    $app.appendChild(this.$target);

    this.onSearch = onSearch;

    this.$target.addEventListener('keyup', (e) => {
        const {value} = e.target
        if(value.length > 0){
            debounce(()=> this.onSearch(value) , 3000) 
        }
    })


    this.render =() => {

    }

    this.render();


}