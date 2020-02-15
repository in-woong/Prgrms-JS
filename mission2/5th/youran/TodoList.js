function TodoList(data, targetId) {
  if(!new.target) {
    throw new Error("new 생성자로 함수를 호출하세요.");
  }

  try{
    isValidData(data);
    isValidTargetId(targetId);

    this.data = data;
    this.targetId = targetId;

    this.render = function() {
      document.querySelector(`#${this.targetId}`).innerHTML = this.data
        .map(
          (item) => 
          `<div>${item.isCompleted
          ? `<s>${item.text}</s>` 
          : item.text}</div>`)
        .join('');
    }

    this.setState = function(nextData) {
      isValidData(nextData);
      this.data = nextData;
      this.render();
    }

    this.render();
  }catch(e) {
    console.log(e.message);
  }
} 
