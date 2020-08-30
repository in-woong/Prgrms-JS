class ErrorModal {
  constructor(error) {
    this.error = error;
    this.$body = document.getElementsByTagName('body')[0];
  }

  render() {
    const errorWrapper = document.createElement('div');
    errorWrapper.className = 'error-wrapper';

    const errorContent = document.createElement('div');
    errorContent.className = 'error-content';

    const errorText = document.createElement('p');
    errorText.textContent = this.error.stack;

    errorContent.appendChild(errorText);
    errorWrapper.appendChild(errorContent);

    const dim = document.createElement('div');
    dim.className = 'dim';
    errorWrapper.appendChild(dim);

    this.$body.appendChild(errorWrapper);
  }
}

export default ErrorModal;
