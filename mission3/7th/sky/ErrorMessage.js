function ErrorMessage({
    elementId,
    message
}) {
    this.$errorMessage = document.getElementById(elementId);
    this.message = message;

    this.setState = errorMsg => {
        this.message = errorMsg;
        this.render();
    }

    this.render = () => {
        this.$errorMessage.innerHTML = this.message
        ? `
            <p>
                Error is occured..<br/>
                See the message below<br/>
                ${this.message}
            </p>
        `
        : '';
    }
}

export default ErrorMessage;