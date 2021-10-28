function TodoCount($target, data) {
    this.$target = $target; 
    this.data = data; 
    this.render = function(){ 
        const finishedTaskCount = data.filter(item => item.isCompleted).length;
        const $count = `
            <span>총 Todo의 갯수: ${data.length}</span>
            <span>완료한 Todo의 갯수: ${finishedTaskCount}</span> 
        `
        this.$target.innerHTML = $count;
    }

    this.render(); 
}