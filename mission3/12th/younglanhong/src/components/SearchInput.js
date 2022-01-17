import { validateInstance } from '../utils/validation.js'
import { debounce } from '../utils/debounce.js'
  
export default function SearchInput({ onSearch, history, addHistory }) {
  if(validateInstance(this, SearchInput)) return

  const $searchInput = document.querySelector('#search-keyword')

  this.history = history

  const type = {
    BACKWARD: 'deleteContentBackward',
    UNDO: 'historyUndo'
  }

  $searchInput.addEventListener('input', debounce(({ inputType, target: { value }}) => {
    // 🔙키워드 삭제 시 이벤트 동작 방지
    if(inputType === type.BACKWARD || inputType === type.UNDO) return 
      try {
        const responseData = onSearch(value)
        responseData.then(data => addHistory(value, data))
      } catch(err) {
        console.error(err)
      }
  }, 300))
}
