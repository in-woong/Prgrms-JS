function TodoList($listContainer, data) {
    if (!new.target) {
        throw new Error('Error: TodoList Object is not set properly');
    }
    //TODO: validate를 분리해서 재사용성 높이기, 파라미터 같이 전달
    this.validate = function () {
        if (!this.data) {
            throw new Error('Error: Invalid data type');
        }
        if (!Array.isArray(data)) {
            throw new Error('Error: Data should be array');
        }
        if (!($listContainer instanceof HTMLElement)) {
            throw new Error('Error: TodoList DOM Object is not set properly');
        }

        data.forEach(element => {
            if (!('text' in element)) {
                throw new Error('Error: Key "text" is missing');
            }
            if (!('isCompleted' in element)) {
                throw new Error('Error: Key "isCompleted" is missing');
            }
        })
    }

    this.data = data;
    this.$listContainer = $listContainer;
    this.toggleList = function (index) {
        const nextData = [...this.data];
        nextData[index].isCompleted = !this.data[index].isCompleted;
        this.setState(nextData);
    };
    this.onRemoveClick = function (index) {
        const nextData = [...this.data];
        nextData.splice(index, 1);
        this.setState(nextData);
    };
    this.bindEvent = function() {
        this.$listContainer.querySelectorAll('.todo-item').forEach($item => {
            $item.addEventListener('click', (e) => {
                const $div = e.target.closest('.todo-item');
                const { index } = $div.dataset;
                
                this.toggleList(index);
            });
        });
        
        this.$listContainer.querySelectorAll('.remove-button').forEach($button => {
            $button.addEventListener('click', (e) => {
                e.stopPropagation(); //이벤트 버블링 막기

                const $div = e.target.closest('.todo-item');
                const { index } = $div.dataset;
                
                this.onRemoveClick(index);
            });
        });
    };
    this.render = function () {
        this.$listContainer.innerHTML = `<ul>
        ${this.data.map(({text, isCompleted}, index) => 
        (isCompleted? 
            `<li class="todo-item" data-index="${index}"><s>${text}</s></li>`:
            `<li class="todo-item" data-index="${index}">${text}<button class="remove-button">삭제</button></li>`)).join('')}
            </ul>`;
    };
    this.setState = function (nextData) {
        if (!nextData) {
            throw new Error('Error: Invalid Data');
        }
        if (this.data === nextData) {
            return;
        }

        this.data = nextData;

        this.validate();
        this.render();
        this.bindEvent();
    }

    this.validate();
    this.render();
    this.bindEvent();
}
