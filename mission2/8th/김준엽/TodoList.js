function TodoList({$target}) {
            
    /**예외처리**/
    // if (!new.target) {
    //     throw new Error('new 키워드를 사용하지 않았습니다.');
    // }
    // validDataList(dataList);
    
    this.dataList = [];
    this.$target = $target;

    this.render = () => {
        $target.innerHTML = this.dataList.map(({text, isCompleted},index) => 
            `<li id="${index}"> ${isCompleted ? `<s>${text}</s>` : text} 
            <button id="${index}">삭제</button> </li>`
        ).join('')
    }

    this.setState = (nextData) => {
        this.dataList = [...this.dataList, nextData];
        this.render();
    }

    this.addEvent = () => {
        this.$target.addEventListener("click", (event)=>{
            const eTaget = event.target;
            console.log(eTaget.dataSet);
            if(eTaget.tagName === "BUTTON"){
                this.dataList.splice(eTaget.id, 1);
            } else if (eTaget.tagName === "LI"){
                this.dataList[eTaget.id].isCompleted = true;
            } else if (eTaget.tagName === "S"){
                this.dataList[eTaget.id].isCompleted = false;
            }

            this.render();
        })
    }

    //이벤트 - 추가
    const $addBtn = document.querySelector('#todo-addBtn')
    const $input = document.querySelector('#todo-input')
    $addBtn.addEventListener("click", () => {
        this.setState({
            text: $input.value,
            isCompleted: false
        });
        $input.value = "";
        $input.focus();
    })  

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