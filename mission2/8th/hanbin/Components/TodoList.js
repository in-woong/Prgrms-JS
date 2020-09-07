export default function TodoList(data, $target, removeTodo, toggleCompleted) {
    
    this.data = data;
    this.$target = $target;

    this.prerender = function() {
        const title = document.createElement('h1');
        this.$target.appendChild(title);
        title.innerHTML = "TodoList";
        this.$listElem = document.createElement('ul');
        this.$listElem.id = 'todo-list';
        this.$target.appendChild(this.$listElem);
    }

    this.render = function(){
        this.$listElem.innerHTML = this.data.map(({text,isCompleted},index) => 
                                isCompleted ? `<li class="${index}"><s>${text}</s><button class="${index}">X</button></li>` 
                                : `<li class="${index}">${text}<button class="${index}">X</button></li>`
                                ).join('');
    }

    this.addEventListenertoElems = function(){
        this.$listElem.addEventListener("click", evt => {
            if(evt.target.tagName==="LI"){
                toggleCompleted(evt.target.className);
            } else if(evt.target.tagName==="S"){
                toggleCompleted(evt.target.parentNode.className);
            } else if(evt.target.tagName==="BUTTON"){
                removeTodo(evt.target.className);
            }
        })
    }

    this.prerender();
    this.render();
    this.addEventListenertoElems();
}
