export default function TodoList(data, id) {
  this.checkInitialization = function (id) {
    if (!(this instanceof TodoList)) {
      throw new Error("'this' is not instance of Todo");
    }
    // id에 해당하는 DOM이 없는 경우
    if (id && !document.querySelector(`#${id}`)) {
      throw new Error('Id is not valid');
    }
  };

  this.checkTodoListData = function (data) {
    if (!Array.isArray(data)) {
      throw new Error('Data is not Array');
    }
    // 데이터 내용이 이상한 경우
    const invalidArray = data.some((data) => typeof (data.text) !== 'string' || typeof (data.isCompleted) !== 'boolean');
    if (invalidArray) {
      throw new Error('Invalid data is included');
    }
  };

  this.checkInitialization(id);
  this.checkTodoListData(data);
  this.data = data;
  this.id = id;

  this.render = function () {
    const htmlString = this.data.map((data) => (data.isCompleted ? `<li><s>${data.text}</s></li>` : `<li>${data.text}</li>`))
      .join('\n');
    document.querySelector(`#${this.id}`).innerHTML = `<ul>${htmlString}</ul>`;
  };

  this.setState = function (data) {
    this.checkTodoListData(data);
    this.data = data;
    this.render();
  };

  this.render();
}
