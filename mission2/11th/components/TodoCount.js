const todoCount = document.querySelector('#todoCount');
const todoCompleted = document.querySelector('#todoCompleted');
function TodoCount(data){
    this.$state=data;
    this.setState=(nextState)=>{
        this.$state=nextState;
        this.render();
    }
    this.render=()=>{
        let checkCnt=0;
        this.$state.reduce((acc, cur, i) =>{
            if(cur.isCompleted===true)
               checkCnt+=1;
        },0);
        todoCompleted.innerHTML=`✔️완료된 todo 개수 ${checkCnt}`;
        todoCount.innerHTML=`📖 총 todo 개수${this.$state.length}`;
    }
    this.render();
}

export default TodoCount;