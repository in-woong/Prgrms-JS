function TodoList(data,elementId){
    this.data = data;
    this.elementId = elementId;
 
    if(!(this instanceof TodoList)){
      throw new Error("not use new keyword");
    }
    this.setState = (nextData) => {
        this.data = nextData
        this.render()
    }
    data.forEach(e=>{
      if(!e.text || typeof e.isCompleted !== "boolean"){
        throw new Error("there is no text");
      }
    })
    
    this.validate =(data)=>{
        if(data === (undefined || null)){
            throw new Error("data doesn't exist");
          }
          if(!Array.isArray(data)){
            throw new Error("is not Array");
          }
    }
    this.render=()=>{
      elementId.innerHTML =`<ul>
      ${this.data.map(({ text, isCompleted }, index) =>
        `<li id="${index}">
          ${!isCompleted ? `<s>${text}</s>` : text}
          <button class="delete-btn">X</button>
        </li>`
      ).join('')}
    </ul>`
    }
    this.validate(data);
    this.render();
}

 
  