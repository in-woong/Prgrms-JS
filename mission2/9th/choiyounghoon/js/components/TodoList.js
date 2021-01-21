import {ERROR_MESSAGE} from "./ErrorMessage.js";


export function TodoList({target,data,onChange}){
    if(!new.target) throw new Error(ERROR_MESSAGE.CANT_NEW)
    this.$target = target;
    this.data = data;
    this.$todoList = document.createElement("ul");
    this.$target.appendChild(this.$todoList);

    
    this.checkData = () => {
        if( Array.isArray(this.data) === false) throw new Error(ERROR_MESSAGE.ERROR_FIND);
        this.data.forEach(item=>{
            if(typeof item.text !== "string" ||
            typeof item.isCompleted !== "boolean")
            {
                throw new Error(ERROR_MESSAGE.ERROR_FIND)
            }
        })
    };
    this.render = () => {
        const listData = this.data
        .map( item =>item.isCompleted ? 
        `<li><s>${item.text}</s><button>삭제</button></li>` : 
        `<li>${item.text}<button>삭제</button></li>`)
        .join("");

        this.$todoList.innerHTML = listData;
    };
    this.addEvent = () => {
        const ul = this.$todoList.childNodes;
        for(let i =0; i < ul.length; i++){
            const item = ul[i];
            item.addEventListener('click', (e) => {
                if(e.target.nodeName === "BUTTON"){
                    this.data.splice(i,1);
                }
                else{
                    this.data[i].isCompleted = !this.data[i].isCompleted;
                }
                onChange(this.data)
            })
        }
    };
    this.setState = (nextData) => {
        this.data = nextData;
        this.checkData();
        this.render();
        this.addEvent();
    };
    this.checkData();
    this.render();
    this.addEvent();
}

