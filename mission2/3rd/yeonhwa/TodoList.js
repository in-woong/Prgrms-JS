function TodoList(data, $template) {

  validate(data, this instanceof TodoList)

  this.data = data;

  this.render = () => {
    let html = '';

    this.data.forEach((element, index) => {
      html += element.isCompleted ?
        `<strike>${element.text}</strike><br/>` :
        `<div id=${index}><span onClick="checkList(this)">${element.text}</span><button onClick="deleteList(this)">삭제!</button><br/></div>`;
    });

    $template.innerHTML = html;
  };

  this.setState = nextData => {
    validate(nextData, this instanceof TodoList)
    this.data = nextData;
    this.render();
  };
};


function validate(data, instance) {
  if (!data) {
    throw new Error('data is empty');
  }

  if (!Array.isArray(data)) {
    throw new Error('data is not Array');
  }

  data.forEach(d => {
    if (typeof d.text !== 'string') throw new Error('data text invalid sytax error');
    if (typeof d.isCompleted !== 'boolean') throw new Error('data isCompleted invalid sytax error');
  })

  if (!instance) {
    throw new Error('not instance');
  }
}
