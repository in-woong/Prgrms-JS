import { $ } from '../../utils/index.js';

export class TodoCount {
    constructor() {
        this.$footer = $('footer');
    }

    countState() {
        console.log('ds');
    }

    render({ todos }) {

        const todoState = { left: 0, done: 0 };

        todos.forEach(({ isCompleted }) => {
            if (isCompleted) {
                todoState.done += 1;
            }
            else if (!isCompleted) {
                todoState.left += 1;
            }
        });

        this.$footer.innerHTML = `
            <div>Left: ${todoState.left}</div>
            <div>Done: ${todoState.done}</div>
        `
    }
}