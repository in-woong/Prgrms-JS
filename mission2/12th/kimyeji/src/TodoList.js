export default class TodoList {
  constructor(data, id) {
    this.data = data;
    this.$target=id;
    this.parameterValidation();
    this.render();
  }

  parameterValidation() {
    if(!this.data ||  Array.isArray(this.data) === false) throw new Error('The parameter \'Data\' is incorrect. Please check.');

    for(const item of this.data) {
      if(typeof item.text !== 'string') throw new Error('Data type error. Please check.');
    }
  }

  setState(nextData) {
    this.data = nextData;
    this.parameterValidation(); 
    this.render(); 
  }

  //rendering 함수 
  render() {
    this.$target.innerHTML = 
    `<ul class='items'>
      ${this.data.map(({ text, isCompleted }) =>`
        <li class='item_row'>
          <div class='item'>
            <span class='item_name'>${isCompleted ? `<s>${text}</s>` : text}</span>
            <button class='item_complete' type='button'>
              ${isCompleted ? `<i class="far fa-smile"></i>` : `<i class="far fa-frown"></i>`}
              <span class="blind">삭제하기 버튼</span>
            </button>
          </div>
        </li>
      `).join('')}
    </ul>`
  }
}
