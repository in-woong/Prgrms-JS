export default function SearchKeyword(onKeyup, $element){
    let $component = document.createElement('input')  
    $component.setAttribute('id', 'search-keyword')
    $element.appendChild($component)
    $component.addEventListener('keyup', (e) => onKeyup(e.target.value));
  

    
    
    
    
}