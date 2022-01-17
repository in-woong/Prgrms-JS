export default function TodoList(params) {
    const $target = document.createElement('div');
    $target.id = params.id;
    $target.className = 'todoList';
    params.$target.appendChild($target);

    const onClick = params.onClick;
    const onRemove = params.onRemove;
    const onDrop = params.onDrop;
    
    this.$target = $target;
    this.dragEventCounter = 0;
    this.id = params.id;
    let data = params.data || [];

    $target.addEventListener('click', function (e) {
        const $element = e.target.closest('li');
        if (!$element) return;

        const id = $element.dataset.id;

        if (e.target.className === 'remove-button') {
            e.stopPropagation();
            if (!this.isDisabled) onRemove(id);
        } else {
            if (!this.isDisabled) onClick(id);
        }
    }.bind(this));
    
    this.setState = function (nextData) {
        data = nextData;
        this.render();
    }

    this.setDisabled = function (isDisabled) {
        this.isDisabled = isDisabled;
        this.render();
    }
    
    this.render = function () {
        const htmlString = data.map(function (todo) {
            const contentHTML = todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`;
            return `<li data-id="${todo._id}" ${this.isDisabled ? '' : `draggable="true"`}> ${contentHTML}
                ${this.isDisabled ? '' : `<button class="remove-button">Remove</button></li>`}`;
        }.bind(this));
        
        $target.innerHTML = `<h5>[ ${this.id} ]</h5><ul>${htmlString.join('')}</ul>`;
    }

    $target.addEventListener("dragstart", function (e) {
        const todoId = e.target.closest('li').dataset.id;
        const dragDivId = e.target.closest('div').id;

        e.dataTransfer.setData("text/plain", JSON.stringify({ todoId, dragDivId }));
        e.dataTransfer.dropEffect = "move";
    });

    $target.addEventListener("dragenter", function(e) {
        this.dragEventCounter++;
        this.$target.style.border = "3px solid skyblue";
    }.bind(this));

    $target.addEventListener("dragleave", function(e) {
        this.dragEventCounter--;
        if (this.dragEventCounter > 0) return;
        
        this.$target.style.border = "";
    }.bind(this));

    $target.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    $target.addEventListener("drop", function (e) {
        e.preventDefault();
        
        this.dragEventCounter = 0;
        this.$target.style.border = "";

        const data = e.dataTransfer.getData("text/plain");
        const { dragDivId, todoId } = JSON.parse(data);
        onDrop({ todoId, dragDivId, dropDivId: e.target.closest('div').id });
    }.bind(this));
}
