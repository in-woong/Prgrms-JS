function TodoCount({$target}){
    const $count = document.createElement("div");
    $count.setAttribute("class", "todoCount");

    this.$target = $target;
    this.component = "";

    this.makeComponent = (data) => {
        const completedCount = data.filter(dataItem => {
            return dataItem.isCompleted;
        }).length;

        return `완료된 갯수는 ${completedCount}`
    }

    this.setState = (newState) => {
        this.component = this.makeComponent(newState);
        this.render();
    }

    this.render = () => {
        this.$target.appendChild($count);
        $count.innerHTML = this.component;
    } 

    // 실행
    this.render();
}

export default TodoCount;