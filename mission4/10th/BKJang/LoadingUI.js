function LoadingUI(targetElement, isLoading) {
  this.target = targetElement;
  this.isLoading = isLoading;

  this.render = function (isLoading) {
    this.target.innerHTML = (
      `<span>
        ${isLoading ? '로딩중!!!!' : ''}
        </span>`
    );
  }

  this.render(this.isLoading);
};

export default LoadingUI;
