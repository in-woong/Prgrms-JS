import { searchDebounce } from '../utils/timeControl.js'

export const inputSearchInput = ($searchInput, getJjalImages) => {
    $searchInput.addEventListener('keyup', function(e) {
        const {target} = e
        searchDebounce(getJjalImages, target.value)
    })
}

export const focusSearchInput = ($searchInput, $searchHistory) => {
    $searchInput.addEventListener('focus', function(e) {
        $searchHistory.style.display = 'block'
    })
}

export const blurSearchInput = ($searchInput, $searchHistory) => {
    $searchInput.addEventListener('blur', function(e) {
        $searchHistory.style.display = 'none'
    })
}

