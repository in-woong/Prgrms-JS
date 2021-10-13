export default function($parent, { handleSearch }){
  // userInput의 DOM 요소
  const elements = {
     $userInputWrapper : Object.assign(document.createElement('div'), {className:'user-input-wrapper'}),
     $userInput : Object.assign(document.createElement('input'), {className:'user-input', value:'', autofocus: true}),
     $searchButton : Object.assign(document.createElement('button'), {className:'search-button', innerText: '검색'}),
  }
  
  // mount
  const mount = () => {
    const {
      $userInputWrapper,
      $userInput,
      $searchButton,
    } = elements;

    $userInputWrapper.appendChild($userInput);
    $userInputWrapper.appendChild($searchButton);
    $parent.appendChild($userInputWrapper);
  }

  // 등록할 이벤트 리스너
  const eventListeners = () => {
    const { $userInput, $searchButton } = elements;
    const onSearch = () => {
      if($userInput.value.trim() === '') return;
      handleSearch($userInput.value.trim());
    }

    // 인풋에 엔터를 눌렀을 때, onSearch 호출함
    $userInput.addEventListener('keydown', e => {
      if(e.key === 'Enter') onSearch();
    });
    
    // 버튼을 눌렀을 때, onSearch 호출함
    $searchButton.addEventListener('click', onSearch);
  }

  ///////////////////////////////////////////////////////////
  mount();
  eventListeners();
}
