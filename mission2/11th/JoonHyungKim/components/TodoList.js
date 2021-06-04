const validateData = (data) => {
    if (data == null) {
        throw new Error('빈 데이터입니다.');
    }

    if (!Array.isArray(data)) {
        throw new Error('배열 값만 사용할 수 있습니다.');
    }

    if (!data.every(({ text = null, isCompleted = null }) => typeof text === 'string' && typeof isCompleted === 'boolean')) {
        throw new Error('잘못된 데이터입니다.');
    }
};

export class TodoList {
    constructor($app, data) {

        this.$app = $app;
        validateData(data);
        this.data = data;
        this.$target = document.createElement('div');
        this.$target.classList.add('todo-list');
        $app.appendChild(this.$target);
        this.render();
    }

    render() {
        this.$target.innerHTML = '';
        
        const docFrag = document.createDocumentFragment();
        
        const listUl = document.createElement('ul');

        this.data.forEach( ({ text, isCompleted }, index) => {
            const listItem = document.createElement('li');
            const itemRemoveBtn = document.createElement('button');
            
            itemRemoveBtn.innerHTML = '삭제';

            itemRemoveBtn.onclick = () => {
                this.data.splice(index, 1);

                this.render();
            };

            if(isCompleted === false){
                listItem.onclick = () => {
                    this.data[index].isCompleted = true;
                    this.render();
                }
            }

            listItem.innerHTML = isCompleted ? `<s>${text}</s>` : text;
            listUl.appendChild(listItem);
            listUl.appendChild(itemRemoveBtn);
        });

        docFrag.appendChild(listUl);

        this.$target.appendChild(docFrag);
    }

    setState(nextData) {
        validateData(nextData);
        this.data = nextData;
        this.render();
    }

    addToList(newText){
        const newItem = {
            text : newText,
            isCompleted : false
        }
        validateData([newItem]);
        this.data.push(newItem);
        this.render();
    }

}
