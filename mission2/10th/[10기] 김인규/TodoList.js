function TodoList (containerID,listData) {
    const container = document.querySelector(`#${containerID}`)
    const todoInput = document.querySelector(".todoInput")
    const submitBtn = document.querySelector(".submit")
    
    todoInput.addEventListener('keydown',(event)=>{
        if (event.keyCode == 13){
            let newObj = this.makeObj(event.target.value)
            listData.push(newObj)
            this.render()
            event.target.value = ""
            event.target.focus()
        }
    })

    submitBtn.addEventListener('click',(event)=>{
        let newObj = this.makeObj(todoInput.value)
        listData.push(newObj)
        this.render()
        todoInput.value = ""
        todoInput.focus()
    })



    this.makeObj = (textValue) =>{
        return {text : textValue, isCompleted:false}
    }


    this.makeNode = (arrayElement) =>{
        const div = document.createElement("div");
        const deleteBtn = document.createElement("button")
        const span = document.createElement("span");

        deleteBtn.innerHTML = "❌"        
        span.innerHTML = arrayElement.text
        arrayElement.isCompleted ? span.style.opacity = "0.5" : span.style.color = "1"

        deleteBtn.addEventListener("click",(e)=>{
            listData.splice(e.target.parentNode.id,1)
            this.render()
        })

        // id로 관리할까?
        span.addEventListener("click",(e) =>{
            this.completeToggle(e.target)
        })

        div.appendChild(span)
        div.appendChild(deleteBtn)
        return div
    }


    this.completeToggle = (toggleTarget) =>{
        const todoItem = toggleTarget.parentNode
    
        if (listData[todoItem.id].isCompleted){
            listData[todoItem.id].isCompleted = false
            toggleTarget.style.opacity = 1 
        }else{
            listData[todoItem.id].isCompleted = true
            toggleTarget.style.opacity = 0.5
        }
    
    }


    this.isNew = () =>{
        if (!new.target){
            throw new Error(ERR_MSG.NO_NEW_KEYWORD)
        }
    }

    this.validation= ()=>{
        if (!Array.isArray(listData)){
            throw new Error(ERR_MSG.NOT_ARRAY)
        }

        const isValidData = listData.every(ele => typeof(ele.text)==="string");

        if (!isValidData){
            throw new Error(ERR_MSG.TEXT_TYPE_ERR);
        }
    }

    
    this.render = () => { 
        container.innerHTML =""
        listData.forEach((ele,key)=>{
            const tmpNode = this.makeNode(ele)
            tmpNode.id = key
            container.appendChild(tmpNode);
        });   
    }

    
    this.isNew();
    this.validation();
    this.render();
}
