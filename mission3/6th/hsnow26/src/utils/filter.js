export const isSearchKeyword = id => id === 'search-keyword'

export const createSearchResultInnerHTML = data => 
    data.map(element => `<img src="${element.imageUrl}">`).join('')

export const createSearchHistoryInnerHTML = data => 
    data.map((element, index) => `<li id="history-item-${index}" class="search-history-item">${element}</li>`).join('')

//공백 제거
export const isSearchInputEmpty = text => text.replace(/\s/gi, "") === ""