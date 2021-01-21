  class todoList {        
      constructor(data){
          this.data = data;
      }

      typeCheck(){
          if (!Array.isArray(this.data)){              
              throw new Error("배열이 아닙니다.");
          }
          return true;
      }

      contentCheck(){
          try{
              this.data.map(ele =>{
                  if(typeof(ele.text) !== "string"){
                      throw new Error("스트링이 아닙니다");
                  }
              })
          }catch(err){
              return false;
          }
          return true;
      }
      

      paint(){
          let htmlString = "" ; 
          const todoList = document.querySelector("#todo-list");
          this.data.map(ele =>{
            htmlString += `<div>${ele.text}</div>`;
          })
          todoList.innerHTML = htmlString;
      }


      render(){
          if(this.typeCheck() && this.contentCheck()){
              this.paint();
          }
      }
  }

  var todoData = [
    {
      text: 'JS 공부하기'
    },
    {
      text: '123'
    }
  ]

  var todolist = new todoList(todoData);
  todolist.render();