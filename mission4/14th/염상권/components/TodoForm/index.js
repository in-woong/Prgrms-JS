import { $ } from '../../utils/index.js';

export class TodoForm {
    constructor({ $target, onSubmit, onRemoveAll }) {
        this.$todoForm = $target;
        this.$todoDeleteAll = $({ selector: '.todo--form > button[type="button"]'});
        this.onSubmit = onSubmit;
        this.onRemoveAll = onRemoveAll;
        this.registerInputEvent();
    }

    generateUniqueKey() {
        return new Date().valueOf();
    }

    registerInputEvent() { 
        this.$todoForm.addEventListener('submit', async (e) => { 
            e.preventDefault();
            const { target } = e;
            const [_, $input] = target.children;
            const todo = $input.value;

            if (todo.trim()) {
                await this.onSubmit({ content: todo });
                $input.value = '';
            }
        });

        this.$todoDeleteAll.addEventListener('click', async () => {
            if (confirm('정말 전부 삭제하시겠습니까?')) await this.onRemoveAll();
         });
        
    }
}
