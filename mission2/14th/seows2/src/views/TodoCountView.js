import View from '../core/View.js';
import { qs } from '../util/helper.js';

export default class TodoCountView extends View {
  constructor() {
    super(qs('#todo-count-view'));

    this.template = new Template();
  }

  show(todoCount = []) {
    this.element.innerHTML = this.template.getTodoCounter(todoCount);
    super.show();
  }
}

class Template {
  getTodoCounter([totalCount, completedCount]) {
    return `
        <div>
            <span>전체: ${totalCount}</span>
            <span>완료: ${completedCount}</span>
        </div>
        `;
  }
}
