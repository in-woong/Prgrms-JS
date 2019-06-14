const imgCardTemplate = (data)=> {
  const imgCardsHtml = data.map(
    imgCard=>`<li class="img-card">
                <img class="img-card-img" src="${imgCard.imageUrl}" alt="">
              </li>`
  ).join(``);
  return imgCardsHtml && `<ul class="img-card-list">${imgCardsHtml}</ul>`;
}

const countTemplate = count => {
  if(!count) return  `<span class="has-no-result">검색 결과가 없습니다</span>`;
  return `<span class="badge"><span class="keyword-count">${count}</span></span>`;
};

const keyWordTemplate = (keyword, count) =>
  `<p class="keyword-container">
    <span class="keyword">${keyword}</span>
    ${countTemplate(count)}
    </p>`;


export default {
  imgCardTemplate,
  keyWordTemplate
}
