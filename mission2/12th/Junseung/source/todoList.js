export default class TodoList{
    constructor($todoListTag,props){
        this.$todoListTag = $todoListTag;
        this.props = props

        this.clickEvent();
    }

    // 올바른 파라미터가 넘어왔는지 체크하는 함수
    testError(data){
        if (!Array.isArray(data)) throw new Error("입력한 데이터가 array형식이 아닙니다.");
        data.forEach((dataItem) => {
            if (!dataItem.hasOwnProperty("text") || !dataItem.hasOwnProperty("isCompleted")){
                throw new Error("올바른 파라미터가 넘어오지 않았습니다!!");
            } 
        })
    }

    // data의 text 항목을 html로 변환하는 함수
    makeComponent(data){
        const html = data.map((dataItem,idx) => {   
            
            return (
                (dataItem.isCompleted) 
                ? 
                `
                <li class = "todoItem" data-id = ${idx}>
                    <s>${dataItem.text}</s> 
                    <button>삭제</button> 
                </li>
                `
                : 
                `
                <li class = "todoItem" data-id = ${idx}>
                    <span>${dataItem.text}</span> 
                    <button>삭제</button> 
                </li>
                `
            )
        }).join("") 

        return `<ul class = "todoData">${html}</ul>`; 
    }

    setState(newData){    
        this.testError(newData);
        this.component = this.makeComponent(newData);
        this.render();
    }

    render(){
        this.$todoListTag.innerHTML = this.component;
    }

    // click이벤트를 한번에 모음(이벤트 버블링) : 삭제와 밑줄 긋기
    clickEvent(){
        const {deleteTodo, underLineTodo} = this.props;

        this.$todoListTag.addEventListener("click",(e) => {
            const index = e.target.parentNode.dataset.id;  // 부모 태그에서 데이터 id 추출 

            // 삭제 버튼 누를 때
            if (e.target.tagName === "BUTTON") {
                deleteTodo(index);
            }
            // 텍스트를 누를 때
            else if (e.target.tagName === "SPAN" || e.target.tagName === "S") {
                underLineTodo(index);
            }

        })
    }
}

