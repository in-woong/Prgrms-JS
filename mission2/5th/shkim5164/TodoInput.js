function TodoInput(data, todoList, todoCount){
    this.data = data;
    this.todoList = todoList;
    this.todoCount = todoCount;

    this.addData = () => {
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
    }
    document.getElementById('addBtn').addEventListener('click', () => {
        this.addData();
    });

    document.getElementById('input').addEventListener('keypress', (e) => {
        if(e.which == 13) this.addData();
    });

    this.setStatus = function(data){
        this.data = data;
    }
}