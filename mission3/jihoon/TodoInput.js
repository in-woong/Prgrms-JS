function TodoInput($input, onSubmit) {
  this.init = function() {
    const $form = document.querySelector("form");
    $form.addEventListener("submit", function(e) {
      e.preventDefault();
      onSubmit($input.value);
    });
  };

  this.reset = function() {
    $input.value = "";
  }
  this.init();
}
