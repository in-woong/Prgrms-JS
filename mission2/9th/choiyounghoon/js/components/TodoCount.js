export function TodoCount({target,data}){
    if(!new.target) throw new Error(ERROR_MESSAGE.CANT_NEW)
    this.$target = target;
    this.data = data;
    this.totalCount = "";
    this.completeCount = "";
    this.$todoTotalCount = document.createElement("p");
    this.$todoCompleteCount = document.createElement("p");
    this.$target.appendChild(this.$todoTotalCount);
    this.$target.appendChild(this.$todoCompleteCount);


    this.getCount = () => {
        this.totalCount = this.data.length;
        this.completeCount = 0;
        this.data.forEach(element => {
            if(element.isCompleted === true){
                this.completeCount++;
            }
        });
    }
    this.render = () => {
        this.getCount();
        this.$todoTotalCount.innerText =`총 숫자는 ${this.totalCount}`
        this.$todoCompleteCount.innerText =`완료된 숫자는 ${this.completeCount}`
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    };

    this.render();
}