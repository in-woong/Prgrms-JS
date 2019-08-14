function SearchResult(elementId, parentElementSelector){

    if(!(this instanceof SearchResult)) 
      throw new Error(`${SearchResult.name}(...) can't be used without new keyword.`); 


    this.data = [];
    this.elementId = elementId; 
    this.parentElementSelector = parentElementSelector;

    this.initiate = function(){
        let parentElement = document.querySelector(parentElementSelector);
        if(parentElement == null){
            throw new Error(`parentElement, ${parentElementSelector} does not exist.`); 
            //console.error(`parentElement, ${parentElementSelector} does not exist.`);
            //return;
        }

        let selfElement = document.querySelector(this.elementId);
        if(selfElement != null){
            throw new Error(`selfElement, ${this.elementId} exist already.`); 
            //console.error(`selfElement, ${this.elementId} exist already.`);
            //return;
        }

        selfElement = document.createElement('div');
        selfElement.id=elementId;
    
        parentElement.appendChild(selfElement);
    };

    this.render = function(){
        const imageList = this.data.map(d =>`<img src="${d.imageUrl}"/>`).join('');
        document.getElementById(this.elementId).innerHTML= imageList;
    }

    this.setState = function(data){ 
        if(!(data instanceof Array))
          throw new Error(`The new data's type is ${typeof(data)}. it must be Array.`);
        this.data=data;
        this.render();
    }

    this.initiate();
}
