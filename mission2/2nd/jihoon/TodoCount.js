function TodoCount($target) {
  this.render = function(data) {
    if (!Array.isArray(data)) {
      throw new Error("[TodoCount] Invalid type of data");
    }
    const completedItems = data.filter(item => item.isCompleted).length;
    $target.innerHTML = `${completedItems} / ${data.length}`;
  };
}
