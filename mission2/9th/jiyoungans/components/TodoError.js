export default function TodoError(errorMsg, $errorElement) {
  this.errorMsg = errorMsg;

  this.render = () => {
    if (this.errorMsg.view) {
      $errorElement.style.display = "block";
      $errorElement.innerHTML = this.errorMsg.text;
    } else {
      $errorElement.style.display = "none";
    }
  };

  this.render();
}
