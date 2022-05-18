import { validateUsers } from '../util/Validation.js'
import { USERS_ERROR } from '../util/Error.js';

export default function ({ initialState, $target, changeUser }) {
  try {
    if(!new.target) throw new Error(USERS_ERROR);

    this.state = validateUsers(initialState);

    const getListHtml = () => {
      const $ul = document.createElement('ul');
      for(const user of this.state) {
        const $li = document.createElement('li');
        const $span = document.createElement('span');
  
        $li.id = user;
        $span.innerText = user;

        $li.appendChild($span);
        $ul.appendChild($li);
      }
      $ul.addEventListener('click', onClick);
      return $ul;
    }

    const onClick = (event) => {
      const tagName = event.target.tagName;
      const userId = event.target.parentElement.id;
      if(tagName === 'SPAN') changeUser(userId);
    }

    this.render = () => {
      if($target.hasChildNodes()) $target.removeChild($target.firstChild);
      $target.appendChild(getListHtml());
    }

    this.render();
  } catch (error) {
    console.log(error);
  }
}