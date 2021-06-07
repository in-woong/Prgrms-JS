function TodoInput($input,onAdd) {
  this.$input = $input;
  this.onAdd = onAdd;
  
  $input.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
      this.onAdd(event.target.value);
    }
  });
}
