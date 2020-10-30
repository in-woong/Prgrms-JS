class TodoList {

    static checkTypeOfData(data){
        if(!Array.isArray(data)){
            throw new Error('data is not array');
        }

        for(let i = 0; i < data.length; i+=1){
            if(!("text" in data[i])){
                throw new Error(`data[${i}] has no text property`);
            }

            if(!("isCompleted" in data[i])){
                throw new Error(`data[${i}] has no isCompleted property`);
            }

            if(typeof data[i].isCompleted !== "boolean"){
                throw new Error(`data[${i}].isCompleted is not boolean`);
            }
        }
    }

    static findListById(id){
        if(typeof id !== 'string'){
            throw new Error('list id is not string');
        }

        const elList = document.getElementById(id);
        if(elList === null){
            throw new Error('list id does not exists');
        }

        return elList;
    }

    constructor(data,listId){
        TodoList.checkTypeOfData(data);
        this.data = data;
        this.$list = TodoList.findListById(listId);
        this.render();
    }

    render(){
        this.$list.innerHTML = this.data.reduce((acc,datum)=>{
            let htmlString = datum.isCompleted ? `<s>${datum.text}</s>` : datum.text;
            return acc + `<div>${htmlString}</div>`;
        },'');
    }

    setState(nextData){
        TodoList.checkTypeOfData(nextData);
        this.data = nextData;
        this.render();
    }
}

export default TodoList;