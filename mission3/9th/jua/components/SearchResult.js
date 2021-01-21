export default function SearchResult($searchResult) {
  this.$searchResult = $searchResult;
  this.resultData = [];

  this.render = () => {
    const htmlString = this.resultData
      .map((data) => `<img src=${data.imageUrl} alt=${data.title}>`)
      .join('');
    this.$searchResult.innerHTML = htmlString;
  };

  this.setState = (newData) => {
    this.resultData = newData;
    this.render();
  };

  this.render();
}
