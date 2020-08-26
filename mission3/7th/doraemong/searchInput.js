import debounce from './debounce.js'
export default function searchInput({setInPut,onSearch}){
    // document
    // .querySelector('#search-keyword')
    // .addEventListener('keyup', event => {
    //     if(event.target.value && event.key ==="Enter"){
    //             onSearch(event.target.value)            
    //     }   
    // })
    document.addEventListener('keyup', debounce(event => {
        //onSearch(event.target.value)
        if(event.target.value && event.key ==="Enter"){
                onSearch(event.target.value)            
        }   
    }))
}