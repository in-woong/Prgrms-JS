function TodoCount({data, $target}) {
    this.$counter;
    this.data;

    this.getTodoCount = () => ({
        totalCount: this.data.length,
        completedCount: this.data.filter(item => !item.isCompleted).length,
    })

    this.generateText = () => {
        if (this.getTodoCount().completedCount === 0) {
            return '신은 이제 할 일이 없사옵니다';
        }
        return `신에게는 아직 ${this.getTodoCount().totalCount}개 중 ${this.getTodoCount().completedCount}개의 할 일이 남았습니다.`;
    }

    this.init = () => {
        this.data = data;
        this.render();
    }

    this.render = () => {
        this.$counter = document.createElement('div');
        this.$counter.classList.add('todo-counter');
        this.$counter.innerText = this.generateText(data);
        $target.appendChild(this.$counter);
    }

    this.setState = newData => {
        this.data = newData;
        this.$counter.innerText = this.generateText();
    }

    this.init();
}

export default TodoCount;
