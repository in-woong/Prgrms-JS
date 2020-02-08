
function TodoListContainer({title, data}, listIndex, $container) {
    this.data = data;
    this.$listContainer;
    this.$titleArea;
    this.listTitle;
    this.todoInput;
    this.todoList;
    this.todoCount;
    this.btnRemoveAll;

    this.addTodoItem = value => {
        this.data.push({
            text: value,
            isCompleted: false,
        })
        this.todoInput.cleaerInput();
        this.update();
    }

    this.toggleTodoItem = idx => {
        this.data[idx].isCompleted = !this.data[idx].isCompleted;
        this.update();
    }

    this.removeTodoItem = idx => {
        this.data.splice(idx, 1);
        this.update();
    }

    this.removeAllItem = () => {
        this.data = [];
        this.update();
    }

    this.update = () => {
        this.todoList.setState(this.data);
        this.todoCount.setState(this.data);
        storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }

    this.makeContainer = () => {
        this.$listContainer = document.createElement('div');
        this.$listContainer.classList.add('list-container');
        this.$titleArea = document.createElement('div');
        this.$titleArea.classList.add('list-title-area');
        this.$listContainer.appendChild(this.$titleArea);
    };

    this.render = () => {
        this.makeContainer();
        
        this.listTitle = new ListTitle({
            title,
            $target: this.$titleArea,
        });

        this.btnRemoveAll = new RemoveAllButton({
            text: '전체 삭제',
            listIndex: listIndex,
            $target: this.$titleArea,
        })
    
        this.todoInput = new TodoInput({
            initValue: '',
            callback: this.addTodoItem,
            $target: this.$listContainer,
        });
    
        this.todoList = new TodoList({
            data: this.data,
            toggleTodoItem: this.toggleTodoItem,
            removeTodoItem: this.removeTodoItem,
            $target: this.$listContainer,
        });
    
        this.todoCount = new TodoCount({
            data: this.data,
            $target: this.$listContainer,
        });

        $container.addEventListener('removeAll', e => {
            if (e.detail.listIndex === listIndex) {
                this.removeAllItem();
            }
        })

        $container.appendChild(this.$listContainer);
    };

    this.render();
}
