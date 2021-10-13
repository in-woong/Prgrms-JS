function TodoList(data, target) {
    
    this.data = data;
    this.target = target;
    this.register = document.querySelector('#inpt');
    
    if (this.data === null) {
        throw new Error('this is null');
    } 
    if (this.data === undefined) {
        throw new Error('this is undefined');
    } 
    if (!new.target) {
        throw new Error('this is not the instance');
    } 
    if (!Array.isArray(data)) {
        throw new Error('this is not Array');
    } 

    this.render = function() {
        let jsTxt = '';
        for (let i=0; i<this.data.length; i++){
            if (this.data[i].isCompleted){
                jsTxt += `<div><span class='todo' id=${this.target}>` + `<li><s>${this.data[i].text}</s></li>` + `</span><button class='delBtn' id=${this.target}>삭제</button></div>` 
            } else {
                jsTxt += `<div><span class='todo' id=${this.target}>` + `<li>${this.data[i].text}</li>` + `</span><button class='delBtn' id=${this.target}>삭제</button></div>` 
            }            
        }
        document.querySelector(this.target).innerHTML = jsTxt;
    }

    this.setState = function(data4) {
        this.data = [...this.data, data4];
        this.render();
    }

    this.addTodo = () => {
        if (this.register.value) {
            const data4 = {
                text: this.register.value,
                isCompleted: false
            };
        this.setState(data4);
        this.register.value = '';
        this.register.focus();
        this.render();
        }
    };
    
    this.delTodo = (id) => {
        this.data.splice(id, 1);
        this.render();
    }

    this.changeCompleteState = (index) => {
        this.data[index].isCompleted = !this.data[index].isComepleted;
        this.render();
    }

    // 할일 추가
    document.querySelector('#btn').addEventListener('click', this.addTodo);
    this.register.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            this.addTodo();
        }
    });

    // 클릭 이벤트
    document.querySelector(target).addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.className === 'todo') {
            const id = e.target.getAttribute('id');
            this.changeCompleteState(id);
        } else if (e.target.className === 'delBtn') {
            const id = e.target.getAttribute('id');
            this.delTodo(id);
        }
    });


}

// export default TodoList;