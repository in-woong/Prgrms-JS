function TodoInput(onAddItem, onRemoveAllItem){

    if(!(this instanceof TodoInput)){
        throw new Error('new 키워드로 함수로 생성해주세요');
    }
    const html = 
        `<form name="TodoForm" method="POST">
            <input type="text" id="todo-input">
            <input type="button" id="todo-submit" value="등록">
            <input type="button" id="todo-removeAll" value="전부 삭제">
         </form>`;


    document.getElementById('todo-form').innerHTML=html;
    
    document.getElementById('todo-submit').addEventListener('click',function(e){
        let itemValue = document.getElementById('todo-input').value;

        if(itemValue === null || itemValue === 'undefined' || itemValue === ""){
            alert('할 일을 입력하세요!');
        } else {
            onAddItem(itemValue);
            document.getElementById('todo-input').value = '';
        }
    });

    document.getElementById('todo-removeAll').addEventListener('click',function(e){
        onRemoveAllItem();        
    });
    
}