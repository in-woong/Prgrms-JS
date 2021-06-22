function TodoList(params) {
    const $target = params.$target
    const onClick = params.onClick
    const onRemove = params.onRemove
    this.$data = params.data;

    $target.addEventListener('click', function(e) {

      const id = e.target.closest('li').dataset.id;
      const username = e.target.closest("li").innerHTML;
      
      if (e.target.className === 'remove-button') {
        e.stopPropagation()
        onRemove(id)
      } else {
        onClick(id)
      }
    })
  
    this.setState = (nextData) => {
    
      this.$data = nextData
      this.render()
    }
  
    this.render = function() {
      if(this.$data.isLoading === false){
        $target.innerHTML = `<div class="message">로딩중입니다...</div>`
      }

      if(this.$data.isLoading === true){
        const htmlString = this.$data.data.map(function(todo) {
          const contentHTML = todo.isCompleted
            ? `<strike>${todo.content}</strike>`
            : `${todo.content}`
    
          return `<li data-id="${
            todo._id
          }">${contentHTML} <button class="remove-button">Remove</button></li>`
        })
    
        $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
      }
    }
    
    this.render()
  }

export default TodoList;