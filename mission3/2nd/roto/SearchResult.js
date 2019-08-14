function SearchResult($target) {
  // data는 keyword, images, isLoading 3가지로 이루어진 object
  let data = {
    keyword: "",
    images: [],
    isLoading: false,
  };

  this.setState = function(nextData) {
    data = nextData;
    this.render();
  };

  this.render = function() {
    console.log(data);
    if (!data) {
      throw new Error("[SearchResult] data가 올바르지 않습니다.");
    }
    if (!data.hasOwnProperty("images")) {
      throw new Error("[SearchResult] data에 images parameter가 없습니다.");
    }

    const htmlStrings = [];

    const isLoading = data.isLoading;
    const keyword = data.keyword;
    const images = data.images;

    if (typeof keyword === "string" && keyword.length > 0) {
      if (isLoading) {
        htmlStrings.push(`<h1>${keyword}에 대해 검색 중입니다 🏄</h1>`);
      } else if (!isLoading && Array.isArray(images) && images.length === 0) {
        htmlStrings.push(`<h1>${keyword}에 대한 이미지가 없네요 😭</h1>`);
      } else {
        htmlStrings.push(`<h1>${keyword} 검색 결과</h1>`);
      }
    }

    htmlStrings.push(
      `${images.map(image => `<img src="${image.imageUrl}">`).join("")}`
    );

    $target.innerHTML = htmlStrings.join("");
  };

  this.render();
}
