function ErrorMessage({
  elementId,
  errorMessage,
}) {
  this.$sectionErrorMessage = document.querySelector(`#${elementId}`);
  this.errorMessage = errorMessage;

  this.setState = (errorMessage) => {
    this.errorMessage = errorMessage;
    this.render();
  }

  this.render = () => {
    this.$sectionErrorMessage.innerHTML = this.errorMessage
      ? `
        <h2>에러 메세지...</h2>
        <p>
          에러 발생 ! </br> 
          ${this.ErrorMessage}
        </p>
      `
      : '';
  }
}

export default ErrorMessage;
