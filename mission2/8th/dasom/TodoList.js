
function TodoList(data, $target, isValid, toggleTodo, deleteTodo){
    this.$target = $target;
    this.data = data;
   
    this.$ul = document.createElement('ul');

    if(!new.target){
        throw new Error('new 키워드로 작성해주세요.');
    }
    isValid();
    
    this.render = () => {
        this.$ul.innerHTML = '';
        this.data.forEach((d, idx) => {
            const $li = document.createElement('li');
            const $btn = document.createElement('button');
            $li.dataset.index = idx;
            $btn.innerHTML = `삭제`;

            if(d.isCompleted){
                $li.setAttribute("class", 'font-red');
                $li.innerHTML = `<s>${d.text}</s>`;
                $li.innerHTML = '(완료) ' + $li.innerHTML;
            } else {
                $li.innerHTML = `${d.text}`;
            }
            $li.appendChild($btn);
            this.$ul.appendChild($li);
        })
        this.$target.prepend(this.$ul);
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }

    this.initAddEvent = () => {
        this.$ul.addEventListener('click', (e)=>{
            if(e.target.tagName === 'LI' || e.target.tagName === 'S'){
                toggleTodo(e.target.closest("li").dataset.index);
            } else if(e.target.tagName === 'BUTTON'){
                deleteTodo(e.target.closest("li").dataset.index);
            }
        })

    }

    this.render();
    this.initAddEvent();
}

function isValid(that){
    if(that.data === null || that.data === undefined) {
        throw new Error('data가 null 혹은 undefinded입니다.');
    }
    if(!Array.isArray(that.data)) {
        throw new Error('data가 Array가 아닙니다.');
    }
    if(!that.data.every(d=>typeof d.text === 'string' || typeof d.isCompleted === 'boolean')) {
        throw new Error('data의 타입이 적절하지않습니다.');
    }
}