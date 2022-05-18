import { createElement } from '../util/helper.js';

const template = `
    <div>
        <h1>TODO</h1>
        <form id="todo-input-form">
            <div class="todo-input">
                <button class="btn-remove-all" type="button">모두 지우기</button>
            </div>
        </form>
        <div class="content">
            <div id="todo-list-view"></div>
        </div>
        <div id="todo-count-view"></div>
    </div>
    </div>
`;

export default function TodoPage() {
  const $dom = createElement(template);

  return $dom;
}
