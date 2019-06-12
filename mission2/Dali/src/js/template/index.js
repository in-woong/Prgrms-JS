const imgCardTemplate = (data)=> {
  const imgCardsHtml = data.map(
    imgCard=>`<li class="img-card">
                <img class="img-card-img" src="${imgCard.imageUrl}" alt="">
              </li>`
  ).join(``);
  return imgCardsHtml && `<ul class="img-card-list">${imgCardsHtml}</ul>`;
}

const keyWordTemplate = keyword => `<p>${keyword}</p>`

export default {
  imgCardTemplate,
  keyWordTemplate
}
