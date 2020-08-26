function SearchResult($target, data) {
  if (!(this instanceof SearchResult)) {
    throw new Error("Call with 'new'");
  }
  this.$target = $target;
  this.data = data;

  const handleImgTagError = () => {
    console.log('error happend, remove img tag', this);
    this.remove();
  };

  this.render = () => {
    //console.log(JSON.stringify(this.data, null, 2));
    const dataHTML = this.data
      .filter(({ imageUrl, tags }) => imageUrl && tags)
      .map(
        ({ imageUrl, tags }) =>
          `<li>
              <img src="${imageUrl}" 
              alt="${tags.join(' ')}" 
              onerror="(${handleImgTagError})()"/>
           </li>`
      )
      .join('');

    this.$target.innerHTML = `<ul>${dataHTML}</ul>`;
  };

  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  };

  this.render();
}

export default SearchResult;
