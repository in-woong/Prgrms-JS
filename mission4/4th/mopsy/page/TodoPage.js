import TodoListContainer from '../component/TodoListContainer.js';
import api from '../api.js';
import { validator } from '../utils.js';

function TodoPage() {
    this.username;
    this.$target;
    this.listContainer;

    this.init = async ({ $target, username }) => {
        this.$target = $target;
        this.username = username;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = '';
        this.listContainer = new TodoListContainer({
            username: this.username,
            $target: this.$target,
        });
        validator.validateInstance(this.listContainer, TodoListContainer);
    }
}

export default TodoPage;
