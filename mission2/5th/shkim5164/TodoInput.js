function TodoInput(data, todoList, todoCount){
    this.data = data;
    this.todoList = todoList;
    this.todoCount = todoCount;
    document.getElementById('addBtn').addEventListener('click', () => {
        const inputValue = document.getElementById('input').value;
        if(!inputValue) alert('값이 비어있습니다!');
        else{
            const oNewObject = {
                "text" : inputValue,
                "isCompleted" : false
            }
            this.data.push(oNewObject);
            this.todoList.setStatus(this.data);
            this.todoCount.setStatus(this.data);
            document.getElementById('input').value = '';

            window.localStorage.setItem('key', JSON.stringify(this.data));
        }
    });

    this.setStatus = function(data){
        this.data = data;
    }
}