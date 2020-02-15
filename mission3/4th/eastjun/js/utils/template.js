const searchResultTemplate = (data) => `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`

const errorAlertTemplate = (errorMessage) => `<h1>${errorMessage}</h1>`

const historyItemsTemplate = (keyword) => `<li class="history-keyword">
                                             <button type="button" value="${keyword}">${keyword}</button>
                                           </li>`

export { searchResultTemplate, errorAlertTemplate, historyItemsTemplate }
