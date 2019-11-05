
function TodoInput() {
    this.$component = document.createElement('div')
   

    TodoInput.prototype.addItem = function(){   
         
    }

    TodoInput.prototype.render = function() {

        let $input = document.createElement('input')
        let $button = document.createElement('input')

        $input.setAttribute('type', 'text')
        $input.setAttribute('id', 'todoText')
        $button.setAttribute('type', 'button')
        $button.setAttribute('id', 'todoAddButton')
        $button.setAttribute('value', 'add')

        $button.addEventListener('click', this.addItem)
            

        this.$component.appendChild($input)
        this.$component.appendChild($button)
        
       
    }
    

  
}

export default TodoInput
   