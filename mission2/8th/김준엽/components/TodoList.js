export default function TodoList($target,dataList,toggleCompleted) {
            
    /**예외처리**/
    if (!new.target) {
         throw new Error('new 키워드를 사용하지 않았습니다.');
    }
    
    this.dataList = dataList;
    this.$target = $target;

    this.init = () => {
        this.$listElem = document.createElement('ul');
        this.$listElem.id = 'todo-list';
        this.$target.appendChild(this.$listElem);
    }

    this.render = () => {
        validDataList(dataList); //데이터 검증
        this.$listElem.innerHTML = this.dataList.map(({txt, isCompleted},index) => 
            `<li id="${index}"> ${isCompleted ? `<s>${txt}</s>` : txt} 
            <button id="${index}">삭제</button> </li>`
        ).join('')
    }

    // this.setState = (nextData) => {
    //     this.dataList = [...this.dataList, nextData];
    //     this.render();
    // }

    this.addEvent = () => {
        this.$listElem.addEventListener("click", (event)=>{
            const eTaget = event.target;
            if(eTaget.tagName === "BUTTON"){
                this.dataList.splice(eTaget.id, 1);
            } else if (eTaget.tagName === "LI"){
                toggleCompleted(eTaget.id);
            } else if (eTaget.tagName === "S"){
                toggleCompleted(eTaget.parentNode.id);
            }

            this.render();
        })
    }
    
    this.init();
    this.render();
    this.addEvent();
}

const validDataList = (dataList) => {
    if (dataList === null || dataList === undefined) {
        throw new Error('파라미터가 null 이거나 undefined 입니다.');
    }

    if (!Array.isArray(dataList)) {
        throw new Error('파라미터가 배열이 아닙니다.');
    }

    //배열이면 데이터 내용 검사
    dataList.forEach(({text, isCompleted}) => {
        if ((typeof(text) !== 'string') && (typeof(isCompleted) !== 'boolean')) {
            throw new Error('파라미터 타입이 올바르지 않습니다.');
        }
    })
}