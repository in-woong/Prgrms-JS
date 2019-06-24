function TodoCount($target) {
  this.render = function(data) {
    const completed_items = data.filter(item => item.isCompleted).length;
    $target.innerHTML = `${completed_items} / ${data.length}`;
  };
}
