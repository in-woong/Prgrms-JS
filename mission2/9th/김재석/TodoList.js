function TodoList(data, target) {
    if(!new.target) {throw new Error('new가 선언되지 않았습니다.')}
    validator(data)

    this.target_el = document.querySelector(target)
    this.register =  document.querySelector(".addVal")
    this.del_bt = document.querySelector(".delBt")
    this.data = data

    this.render = function () {
      let todo_list = ''
      todo_list = this.data.map((todo, ind) =>`<div><span class="todo" id=${ind}>` + 
      (!todo.isCompleted ? `${todo.text}` : `<s class="todo" id=${ind}>${todo.text}</s>`) + 
      `</span><button class="delBt" id=${ind}>삭제</button></div>` ).join('')
      this.target_el.innerHTML = todo_list
    }
    this.render()

    this.setState = function (nextData) {
      this.data = [...this.data, nextData]
      this.render()
    }

    this.addTodo = () => {
         if(this.register.value){
            const newData = {
                "text" : this.register.value,
                "isCompleted" : false
            }
            this.setState(newData)
            this.register.value = ''
            this.register.focus()
            this.render()

         }
    }

    this.delTodo = (id) => {
        this.data.splice(id,1)
        this.render()
    }

    this.changeCompleteState = (ind) => {
            this.data[ind].isCompleted = !this.data[ind].isCompleted
            this.render()
    }

    function validator(data) {
        if(!data){
            throw new Error("data가 비었습니다.")
        } else if (data[0] === undefined) {
            throw new Error("data가 배열이 아닙니다")
        } else {
            for(let i = 0 ; i < data.length ; i++){
                if(data[i].text === undefined || typeof(data[i].text) !== "string")
                    throw new Error(`${i+1}번째 데이터 내용이 이상합니다.`)
            }
            return true
        }
    }

    //할일 추가
    document.querySelector(".addBt").addEventListener("click",this.addTodo) 
   this.register.addEventListener("keyup", e => {
        if(e.keyCode === 13){
            this.addTodo()
        }
    })

    //클릭이벤트
    this.target_el.addEventListener("click", (e) => {
        console.log(e.target)
        if(e.target.className === "todo"){
            const id =  e.target.getAttribute('id')
            this.changeCompleteState(id)
        } else if (e.target.className === "delBt"){
            const id =  e.target.getAttribute('id')
            this.delTodo(id)
        }
        // if(e.target.className )
        // const id =  e.target.getAttribute('id')
        // this.changeCompleteState(id)

    })
}
