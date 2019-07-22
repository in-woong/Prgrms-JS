function SearchInput(elementId, parentElementSelector, searchResult){
    
    if(!(this instanceof SearchInput)) 
      throw new Error(`${SearchInput.name}(...) can't be used without new keyword.`); 

      if(!(searchResult instanceof SearchResult)) 
        throw new Error("The result's renderer must be SearchResult"); 

    this.elementId = elementId; 
    this.searchResult = searchResult;
    this.timer;

    this.render = function(){
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

        selfElement = document.createElement('input');
        selfElement.id=this.elementId;
        selfElement.addEventListener('keyup', function(e){
            if(this.timer){
                clearTimeout(this.timer);
            }

            this.timer = setTimeout(function(){
                fetchImages(e,this.searchResult);
            }.bind(this),500);

        }.bind(this));
        parentElement.insertBefore(selfElement, parentElement.firstChild);
    };

    this.render();

}
