function searchData(searchKeyword) {
  return fetch(`https://jjalbot.com/api/jjals?text=${searchKeyword}`)
    .then(response => response.json())
    .then(data =>
      data.map(item => ({
        imageUrl: item.imageUrl,
        title: item.title,
      }))
    )
    .catch(error => console.log(error))
}
