function TodoList(data, $template){
  if(!data) { 
    throw new Error('data is empty'); 
  }

  if(typeof data !== 'object'){
    throw new Error('data is not object');
  }

  if(!(this instanceof TodoList)){
    throw new Error('not instance');
  }

  this.data = data;

  this.render = () => {
    let html = '';

    this.data.forEach((element, index) => {
      html +=  element.isCompleted ? 
                `<strike>${element.text}</strike><br/>` : 
                `<div>${element.text}</div>`;
    });

    $template.innerHTML = html;
  };

  this.setState = nextData =>{
    this.data = nextData;
    this.render();
  };
};