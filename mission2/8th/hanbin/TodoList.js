function TodoList(data, $elem) {
    
    this.data = data;
    this.$elem = $elem;
    
    this.isValidData = function(){
        try{
            if(this.data===undefined){
                throw new Error("Given data is undefined data");
            }
            if(this.data===null){
                throw new Error("Given data is null data");
            }
            if(!Array.isArray(this.data)){
                throw new Error("Given data is not array");
            }
            if(!this.data.every((item) => (typeof item.text === 'string') && (typeof item.isCompleted === 'boolean'))){
                throw new Error("Given data's value type is incorrect");   
            }
            if(!(this instanceof TodoList)){
                throw new Error("function was call without new operation");
            }
        }   
        catch(e){
            console.error(e);
        }
    }

    this.render = function(){
        this.$elem.innerHTML = this.data.map(({text,isCompleted}) => 
                                isCompleted ? `<s><div>${text}</div></s>` : `<div>${text}</div>`
                                ).join('');
    }

    this.setState = function(nextdata){
        this.data = nextdata;
        this.isValidData();
        this.render();
    }

    this.render();
}
