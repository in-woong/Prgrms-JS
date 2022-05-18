import { TODOCOUNT_ERROR } from "../util/Error.js";

export default function ({ $target, count }) {
  try {
    if(!new.target) throw new Error(TODOCOUNT_ERROR);
  
    this.render = ([total, completed]) => {
      $target.innerText = `총 : ${total} / 완료 : ${completed}`;
    }
  
    this.render(count);    
  } catch (error) {
    console.log(error);
  }
} 