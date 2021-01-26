class TodoList{
    constructor(data){
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
        let text = '';
        this.data.map((item) => {
            item.isCompleted == true ? text += `<div><s>${item.text}</s></div>` : text += `<div>${item.text}</div>`
        })
        document.querySelector('#todo-list').innerHTML += text;
    }
}