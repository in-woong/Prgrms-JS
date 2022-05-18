import { HEADER_ERROR } from "../util/Error.js";

export default function ({ $target, initialState }) {
  try {
    if(!new.target) throw new Error(HEADER_ERROR);

    this.state = initialState;
    
    this.setState = (newState) => {
      this.state = newState;
      this.render();
    }

    this.render = () => {
      $target.innerHTML = `<h1>${this.state} TODO LIST</h1>`;
    }
  
    this.render();    
  } catch (error) {
    console.log(error);
  }
}