function TodoInput($input, $btn, onSubmit) {
  this.render = function() {
    $btn.addEventListener("click", function(e) {
      onSubmit($input.value);
    });
  };
  this.render();
}
