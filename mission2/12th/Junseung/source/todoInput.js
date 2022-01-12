export default class TodoInput{
    constructor(tag, props){
        this.$inputTag = tag;
        this.props = props;
        this.render();

        this.inputDataEvent()
    }

    makeTemplete(){
        return (
            `
            <form id = "todoInput">
                <input id = "inputTag" type = "text"></input>
                <button>할 일 입력</button>
            </form>
            `
        )
    }

    render(){
        this.$inputTag.innerHTML = this.makeTemplete();
    }

    // 데이터 입력 이벤트
    inputDataEvent(){
        this.$inputTag.addEventListener("submit", (e) =>{
            e.preventDefault();
            this.props.addTodo();
        })
    }
}

