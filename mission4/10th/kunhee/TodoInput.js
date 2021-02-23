export default function TodoInput($ref){
    if(!new.target){
      throw new Error("error message, Please attach the 'new' to do constructor") 
    }
    if(!$ref){
      throw new Error("error message, Iillegal Dom Selector") 
    }

    this.$ref = $ref;

    this.render = function(){
      let html = "";
      html += `<div><input  placeholder="input text"  class="textInput" type="text"/><input class="addButton" type="button" value="추가하기"/></div>`
      $ref.innerHTML = html;
      this.bindEvent();
    }
    this.getTextByInput = () =>{
        const textInputRef = this.$ref.querySelector(".textInput");
        const text = textInputRef.value;
        const newState =  [...this.state,{
            text: text,
            isCompleted: false,
        }]
        this.setState(newState);
    }
    this.bindEvent = () =>{
       const addButtonRef = this.$ref.querySelector(".addButton") 
       addButtonRef.addEventListener("click",this.getTextByInput)
    }
    this.setState = (newData) =>{
      this.render();
    }

    this.render();
  }