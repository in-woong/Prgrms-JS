export const createSearchResultInnerHTML = data => 
    data.map(element => `<img src="${element.imageUrl}">`).join('')

export const createSearchHistoryInnerHTML = data => 
    data.map(element => `<li class="search-history-item">${element}</li>`).join('')

//공백 제거
export const isSearchInputEmpty = (text) => {
    return text.replace(/\s/gi, "") === ""
}