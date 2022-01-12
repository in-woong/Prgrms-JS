export default function TodoInput({ $target, addTodoItem}) {
  this.$target = $target;

  this.$todoForm = document.createElement('form');
  this.$todoForm.className = 'form_userinput';
  this.$target.appendChild(this.$todoForm);

  this.$todoInput = document.createElement('input');
  this.$todoInput.className = 'input_userinput';
  this.$todoForm.appendChild(this.$todoInput);

  this.addTodoItem = addTodoItem;

  this.$todoForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const $input = document.querySelector('.input_userinput')
    const { value } = $input 
    console.log(value)

    if((value.trim()).length > 0) { //  console.log(e.target.value) 는 들어온다 
      this.addTodoItem(value);
      $input.value=''
      $input.focus()
    }
    if((value.trim()).length === 0) {
      alert('한 글자 이상 입력해주세요!')
    }
  })

  this.setState = function(nextState) {
    this.state = nextState
    this.render()
  }

}
