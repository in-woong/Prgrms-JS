class TodoList{
    constructor(elementID,data){
        this.elementID = elementID;
        this.data = data;
        this.validator();
        this.render();
    }

    //data의 유효성 검사
    validator(){
        try{
            if(!this.data){
                throw new Error(ERROR_MESSAGE.IS_UNDEFINED_OR_NULL)
            }
            if(!Array.isArray(this.data)){
                throw new Error(ERROR_MESSAGE.IS_NOT_ARRAY)
            }
        }
        //그 외의 에러
        catch(error){
            console.log(error);
        }
    }

    render(){
        const todoListElement = document.querySelector("#${this.elementID}");
        const todoString = this.data.map(item => {
            item.isCompleted ? `<div><s>${item.text}</s></div>` : `<div>${item.text}</div>`}).join('\n');
        todoListElement.innerHTML = todoString;
    };
}

const todoStudy = new TodoList("study-list", study);
const todoHealth = new TodoList("health-list", health);
