export default function TodoCount($target,dataList){
    
    this.$target = $target;
    //this.dataList = dataList;

    this.init = () => {
        this.$todoCnt = document.createElement('div');
        this.$todoCnt.id = 'todo-cnt';
        this.$target.appendChild(this.$todoCnt);
    }

    this.render = () => {
        const totalCnt = dataList.length;
        let endCnt = 0;
        dataList.forEach(data => {
            if(data.isCompleted) endCnt++;
        })
        this.$todoCnt.innerHTML = `총 개수 : ${totalCnt} 완료 개수 : ${endCnt}`
    }

    this.init();
    this.render();
}