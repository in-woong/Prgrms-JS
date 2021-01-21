export default class TodoCount{
    constructor({$target,initialState}){
        const $wrapper = document.createElement("section");
        $wrapper.className ="TodoCount";
        $target.appendChild($wrapper)
        this.state = initialState
        console.log(this.state)
        this.render();
    }

    setState = (nextState)=>{
        this.state = nextState
        this.render()
    }
    
    render(){
        // this.data.length;
        
        const totalTodo = this.state.length;;
        const notDoneTodo = this.state.filter(data=>data.isCompleted===false).length;
        const doneTodo = totalTodo-notDoneTodo
        document.querySelector(".TodoCount").innerHTML =
        `<ol>
        전체 TODO 개수 : ${totalTodo}
        <br>
        진행중인 TODO 개수 : ${notDoneTodo}
        <br>
        완료된 TODO 개수 : ${doneTodo}
        </ol>`
    }
}
