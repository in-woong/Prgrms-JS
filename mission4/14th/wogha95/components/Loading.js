import { LOADING_ERROR } from '../util/Error.js';

export default function ({ initialState, $target }) {
  try {
    if(!new.target) throw new Error(LOADING_ERROR);

    this.state = initialState;

    this.setState = (newState) => {
      this.state = newState;
      this.render();
    }

    this.render = () => {
      const $todo = document.querySelector('#todo');
      if(this.state) {
        $todo.classList.add('none');
        $target.classList.remove('none');
      } else {
        $target.classList.add('none');
        $todo.classList.remove('none');
      }
    }
    this.render();
  } catch (error) {
    console.log(error);
  }
}