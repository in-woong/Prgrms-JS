export default class TodoCount{
    constructor($todoListTag){
        this.newDiv = document.createElement('div');
        this.$todoListTag = $todoListTag;

    }

    setState(newData){
        const completedCountString = this.makeComponent(newData);
        this.render(completedCountString);
    }

    makeComponent(data){
        const completedCount = data.filter(dataItem => {
            return dataItem.isCompleted;
        }).length;

        return `완료된 갯수는 ${completedCount}`
    }

    render(completedCountString){
        this.newDiv.textContent = completedCountString;
        this.$todoListTag.appendChild(this.newDiv);
    }
}