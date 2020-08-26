function validInstance(instance){
    if(!(instance instanceof TodoList)){
        throw new Error('new 키워드로 함수로 생성해주세요');
    }
}

function validData(data){
    if(data === ''|| data === 'undefined') throw new Error('타입이 올바르지 않습니다.');
    if(!Array.isArray(data)) throw new Error('data는 배열이어야 합니다');

    data.some(function(value){
        if(typeof value.text !== 'string'|| typeof value.isCompleted !== 'boolean') throw new Error('data의 내용이 올바르지 않습니다!');
    });
}

function TodoList(data,elementId,onRemoveItem,onToggleItem){
    let todo = data;
    console.log(typeof todo);
    this.elementId = elementId;

    const $ul = document.createElement('ul');
    $ul.id = this.elementId;
    document.getElementById('todo-list').appendChild($ul);

    validInstance(this);
    validData(todo);

    this.loadData=function(){
        const html = todo.map((d)=>{
            const text = d.isCompleted?`<s>${d.text}</s>` : `${d.text}`;
            return `<li class="todo-item" id="${d.id}"><span>${text}</span><button class="remove-btn">x</button></li>`;
        }).join("");
        
        document.getElementById(`${this.elementId}`).innerHTML=html;
    };

    this.render=function(){
        this.loadData();   
    };

    this.setState=function(nextData){
        todos = nextData;
        this.loadData(todos);
    }

    document.getElementById(`${this.elementId}`).addEventListener('click',function(e){
        console.log(e.target.nodeName);
        //console.log(event.parentNode.id);

        //x버튼 눌렀을 때 
        if(e.target.nodeName === 'BUTTON'){
            const idx = todo.findIndex((d) => d.id === e.target.parentElement.id);
            onRemoveItem(e.target.parentElement.id);
        }else{
            //완료하지 않은 항목 클릭
           if(e.target.nodeName.toLowerCase() === 'span'){
                const idx = todo.findIndex((d) => d.id === e.target.parentElement.id);
                onToggleItem(idx);
           }
            //완료항목 클릭
           if(e.target.nodeName.toLowerCase() === 's'){
                const idx = todo.findIndex((d) => d.id === e.target.parentElement.parentElement.id);
                onToggleItem(idx);
           } 
        }
    });
}