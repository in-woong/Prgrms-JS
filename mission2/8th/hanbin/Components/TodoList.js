export default function TodoList(data, $target) {
    
    this.data = data;
    this.$target = $target;

    this.isValidData = function(data){
        try{
            if(data===undefined){
                throw new Error("Given data is undefined data");
            }
            if(data===null){
                throw new Error("Given data is null data");
            }
            if(!Array.isArray(data)){
                throw new Error("Given data is not array");
            }
            if(!data.every((item) => (typeof item.text === 'string') && (item.text!=='') && (typeof item.isCompleted === 'boolean'))){
                throw new Error("Given data's value type is incorrect");   
            }
            if(!this instanceof TodoList){
                throw new Error("function was call without new operation");
            }
            return true;
        }   
        catch(e){
            console.error(e);
        }
    }


    this.prerender = function() {
        const title = document.createElement('h1');
        this.$target.appendChild(title);
        title.innerHTML = "TodoList";
        this.$listElem = document.createElement('div');
        this.$listElem.id = 'todo-list';
    }

    this.render = function(){
        this.$target.appendChild(this.$listElem);
        this.$listElem.innerHTML = this.data.map(({text,isCompleted},index) => 
                                isCompleted ? `<div class="${index}"><s>${text}</s></div><button class="${index}">X</button>` 
                                : `<div class="${index}">${text}</div><button class="${index}">X</button>`
                                ).join('');
    }

    this.setState = function(nextdata){
        this.data = nextdata;
        this.isValidData();
        this.render();
    }

    this.addEventListenertoElems = function(){
        this.$listElem.addEventListener("click", evt => {
            if(evt.target.tagName==="DIV"){
                this.data[evt.target.className].isCompleted = true;
            } else if(evt.target.tagName==="S"){
                this.data[evt.target.parentNode.className].isCompleted = false;
            } else if(evt.target.tagName==="BUTTON"){
                this.data.splice(evt.target.className, 1);
            }
            this.render();
        })
    }

    this.makeAddEvent = function(){
        const inputBox = document.querySelector('.inputBox');
        const submitBtn = document.querySelector('.submitBtn');

        submitBtn.addEventListener('click', () => {
            const inputData = [{text : inputBox.value, isCompleted : false}];
            if(this.isValidData(inputData)){
                this.data.push(inputData[0])
                inputBox.value ='';
                this.render();
            }
        });
    }

    this.isValidData(this.data);
    this.prerender();
    this.render();
    this.addEventListenertoElems();
    this.makeAddEvent();
}
