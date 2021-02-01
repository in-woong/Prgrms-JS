class TodoList {
  constructor($target, todos) {
    this.$target = $target;
    this.todos = todos;    

    this.searchBar();
    this.isValidate();
    this.render();
    this.handleDelete();
  }

  isValidate () {
    if (!(this instanceof TodoList)) {
      throw new Error('new 키워드를 사용해주세요!');
    }
    if (!Array.isArray(this.todos) || this.todos === undefined || this.todos === null) {
      throw new Error('배열이 아니거나 값이 없습니다.');
    }
  }

  render () {
    const html = this.todos
    .map(function (item) {
      return item.isCompleted ? '<li><s>' + item.text + '</s><button>삭제</button></li>' : '<li>' + item.text + '<button>삭제</button></li>'
    })
    .join('\n');
    this.$target.insertAdjacentHTML('beforeend', html);
  }

  handleDelete () {
    const deleteBtn = this.$target.querySelectorAll('button');
    deleteBtn.forEach((element) => {
      element.addEventListener('click', function() {
        console.log(this.parentNode);
        this.parentNode.remove();
      });
    });
  };

  searchBar () {
    const stateData = [...this.todos];    
    const searchArea = document.querySelector('#search-bar');
    const searchAreaInput = searchArea.querySelector('input[type="text"]');
  
    searchAreaInput.addEventListener('change', function() {
      console.log(this.value);    
  
      stateData.push({text: this.value, isCompleted: false});
      console.log('복사된 데이터', stateData);
    }); 
  }

  setState (nextData) {
    this.todos = nextData;
    this.isValidate();
    this.render();
    this.handleDelete();
  }
}