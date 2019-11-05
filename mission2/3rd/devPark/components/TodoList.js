

function TodoList(data) {

    if (!this instanceof TodoList) {
        throw new Error('new 키워드가 필요합니다!')
    }

    if (!data instanceof Array) {
        throw new Error('배열 타입의 파라메타가 아닙니다!')
    }

    data.forEach( todo => {
        if (!todo.text || typeof todo.text !== 'string')
        throw new Error('배열안의 데이터가 올바르지 않습니다!')
    })


    this.$component = document.createElement('ul');
 

    TodoList.prototype.completeItem = function(){   
        
        if(this.childNodes[0].nodeName !== 'STRIKE'){
            let strike = document.createElement('strike')
            strike.innerText = this.innerText
            this.innerText= ''
            this.appendChild(strike)  
        }else{
            let strike = this.childNodes[0]
            this.innerText= strike.innerText;
            this.removeChild(strike);   
        }
      
       
    }

    TodoList.prototype.render = function(data) {
        data.forEach((todo) => {
        
            let listItem = document.createElement('li')
            
            listItem.addEventListener('click', this.completeItem)
            
            
            if(todo.isComplete){
                let strike = document.createElement('strike')
                strike.innerText = todo.text
                listItem.appendChild(strike)
            }else{
                listItem.innerText = todo.text
            }
            this.$component .appendChild(listItem)
        })
        
       
    }
    

  
}

export default TodoList
   