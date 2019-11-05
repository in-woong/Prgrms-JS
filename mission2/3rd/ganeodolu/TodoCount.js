function TodoCount(listname, data) {
    this.data = data;
    this.listname = listname;
    this.render = function () {
        let count = 0;
        let completedData = Object.values(this.data).map((val, idx)=>{
            return val.isCompleted && count++
        })
        document.querySelector(`${this.listname}`).innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;총 Todo의 개수 : ${this.data.length}, 완료된 Todo의 개수 : ${count}`
    }
    this.render();
    // 새로운 데이터를 불러서 다시 렌더링하는 setState함수
    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
}