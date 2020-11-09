import { 
    checkInstance, 
    checkTarget, 
    checkData, 
    checkDataTypes 
} from './validation.js';

export default function TodoList(data, $targetId) {
    if (!(this instanceof TodoList)) {
        throw new Error("TodoList의 instance가 아닙니다.");
    }

    this.data = data;
    this.$targetId = $targetId;

    this.validation = (data) => {
        checkInstance(this);
        checkTarget(this.$targetId);
        checkData(data);
        checkDataTypes(
            data,
            (data) => typeof data.text === 'string' && typeof data.isCompleted === 'boolean'
        )
    }

    this.render = () => {
        const todoListHtml = this.data
            .map(({text, isCompleted}) => (isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`))
            .join('');
        document.querySelector(`${this.$targetId}`).innerHTML = `<ul>${todoListHtml}</ul>`;
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }

    this.render();
    this.validation(this.data);
}
