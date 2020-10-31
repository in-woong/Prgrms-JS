function checkTypeOfData(data, listId){
    if(!Array.isArray(data)){
        throw new Error('data is not array');
    }

    data.forEach((datum,index)=>{
        if(!("text" in datum)){
            throw new Error(`<listId : ${listId}> data[${index}] has no text property`);
        }

        if(typeof datum.text !== "string"){
            throw new Error(`<listId : ${listId}> data[${index}].text is not string`);
        }

        if(!("isCompleted" in datum)){
            throw new Error(`<listId : ${listId}> data[${index}] has no isCompleted property`);
        }

        if(typeof datum.isCompleted !== "boolean"){
            throw new Error(`<listId : ${listId}> data[${index}].isCompleted is not boolean`);
        }
    })
}

class TodoList {

    constructor(data,listId){
        checkTypeOfData(data,listId);
        this.data = data;
        this.$list = document.getElementById(listId);

        if(!this.$list){
            throw new Error('list id does not exists')
        }

        this.render();
    }

    render(){
        this.$list.innerHTML = this.data.reduce((acc,datum)=>(acc + `<div>${datum.isCompleted ? `<s>${datum.text}</s>` : datum.text}</div>`),'');
    }

    setState(nextData){
        checkTypeOfData(nextData,this.$list.id);
        this.data = nextData;
        this.render();
    }
}

export default TodoList;
