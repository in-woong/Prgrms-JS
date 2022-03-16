export default function ErrorMessage({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  const $messageBox = document.createElement('div');
  this.$target.appendChild($messageBox);

  this.render = function() {
    const { errorMessage } = this.state;

    if (!errorMessage) {
      $messageBox.innerHTML = null;
      return;
    }
    
    $messageBox.innerHTML = `<div style="color:red;">${errorMessage}</div>`;
  }

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();
};
