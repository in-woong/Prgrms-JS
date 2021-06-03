function TodoList(data, id) {

    this.data = data;
    this.id = id;

    if (this.data === null) {
        throw new Error('this is null');
    } 
    if (this.data === undefined) {
        throw new Error('this is undefined');
    } 
    if (!new.target) {
        throw new Error('this is not the instance');
    } 
    if (!Array.isArray(data)) {
        throw new Error('this is not Array');
    } 

    this.render = function() {
        let jsTxt = '';
        for (let i=0; i<this.data.length; i++){
            if (this.data[i].isCompleted){
                jsTxt += `<li><s>${this.data[i].text}</s></li>` 
            } else {
                jsTxt += `<li>${this.data[i].text}</li>` 
            }            
        }
        document.querySelector(id).innerHTML = jsTxt;
    }

    this.setState = function(data4) {
        this.data = data4;
        this.render();
    }
    
}

export default TodoList;