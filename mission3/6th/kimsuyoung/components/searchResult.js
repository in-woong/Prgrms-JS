function searchResult({ data, $resultSelector }) {
  this.setState = (nextData) => {
    data = nextData
    this.render()
  }

  this.render = () => {
    $resultSelector.innerHTML = `<div>${
      Object.keys(data).length === 0
        ? '<div>결과값이 없습니다</div>'
        : data.map(
            (value) => `<img src="${value.imageUrl}" alt="${value.title}" />`
          )
    }</div>`
  }
}

export default searchResult
