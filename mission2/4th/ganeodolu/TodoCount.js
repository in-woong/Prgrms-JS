// TodoList의 총 개수와 완료된 개수 구하는 함수

function TodoCount($target, data) {
    this.data = data;
    this.$target = $target;
    this.render = function () {
        let count = 0;
        const completedData = this.data.map((val, idx)=>{
            return val.isCompleted && count++
        })
        this.$target.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;총 Todo의 개수 : ${this.data.length}, 완료된 Todo의 개수 : ${count}`
    }
    // 새로운 데이터를 불러서 다시 렌더링하는 setState함수
    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
    this.render();
}