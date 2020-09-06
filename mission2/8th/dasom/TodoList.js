
function TodoList(data, $target, toggleTodo, deleteTodo){
    this.$target = $target;
    this.data = data;
   
    this.$ul = document.createElement('ul');

    if(!new.target){
        throw new Error('new 키워드로 작성해주세요.');
    }
    isValid(this);
    this.render = () => {

        let html = this.data.map((d, idx)=> {
            return `<li data-index=${idx} data-action="toggle">${d.text} <button>삭제</button></li>`}).join(' ');
        
        this.$ul.innerHTML = html;
        this.$target.appendChild(this.$ul);
        document.querySelectorAll('li').forEach((li, idx) => {
            if(this.data[idx].isCompleted){
                li.prepend('(완료) ');
                li.style.setProperty("text-decoration", "line-through");
                li.setAttribute('class', 'font-red');
            }
        })
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }

    this.initAddEvent = () => {
        this.$ul.addEventListener('click', (e)=>{
            let idx;
            if(e.target.tagName === 'LI'){
                idx = e.target.dataset.index;
                toggleTodo(idx);
            } else if(e.target.tagName === 'S'){
                idx = e.target.parentElement.dataset.index;
                toggleTodo(idx);
            } else if(e.target.tagName === 'BUTTON'){
                idx = e.target.parentElement.dataset.index;
                deleteTodo(idx);
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
    if(!that.data.every(d=>typeof d.text === 'string')) {
        throw new Error('data의 타입이 적절하지않습니다.');
    }
    if(that === window) {
        throw new Error('new 키워드로 작성해주세요.');
    }
}