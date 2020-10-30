function checkTypeOfData(data, listId){
    if(!Array.isArray(data)){
        throw new Error('data is not array');
    }

    for(let i = 0; i < data.length; i+=1){
        if(!("text" in data[i])){
            throw new Error(`<listId : ${listId}> data[${i}] has no text property`);
        }

        if(typeof data[i].text !== "string"){
            throw new Error(`<listId : ${listId}> data[${i}].text is not string`);
        }

        if(!("isCompleted" in data[i])){
            throw new Error(`<listId : ${listId}> data[${i}] has no isCompleted property`);
        }

        if(typeof data[i].isCompleted !== "boolean"){
            throw new Error(`<listId : ${listId}> data[${i}].isCompleted is not boolean`);
        }
    }
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
        this.$list.innerHTML = this.data.reduce((acc,datum)=>{
            let htmlString = datum.isCompleted ? `<s>${datum.text}</s>` : datum.text;
            return acc + `<div>${htmlString}</div>`;
        },'');
    }

    setState(nextData){
        checkTypeOfData(nextData,this.$list.id);
        this.data = nextData;
        this.render();
    }
}

export default TodoList;