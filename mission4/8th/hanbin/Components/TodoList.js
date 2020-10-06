export default function TodoList($target, data, onRemoveTodo, onToggleCompleted) {

    this.data = data;

    this.prerender = () => {
        const title = document.createElement('h1');
        $target.appendChild(title);
        title.innerHTML = "TodoList";
        this.$listElem = document.createElement('ul');
        this.$listElem.id = 'todo-list';
        $target.appendChild(this.$listElem);
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }

    this.render = () => {
        this.$listElem.innerHTML = this.data.todos
                                    .map(
                                        ({ content, isCompleted }, index) => `
                                        <li class="${index}">
                                        ${isCompleted ? `<s>${content}</s>` : `${content}`}
                                        <button class="${index}">X</button>
                                        </li>
                                    `
                                    )
                                    .join("");
    }

    this.delegateEvent = () => {
        this.$listElem.addEventListener("click", evt => {
            if(evt.target.tagName==="LI"){
                onToggleCompleted(evt.target.className);
            } else if(evt.target.tagName==="S"){
                onToggleCompleted(evt.target.parentNode.className);
            } else if(evt.target.tagName==="BUTTON"){
                onRemoveTodo(evt.target.className);
            }
        })
    }

    this.prerender();
    this.render();
    this.delegateEvent();
}
