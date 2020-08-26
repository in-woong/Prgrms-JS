class TodoList {
    constructor(element) {
        if (element == null) {
            console.error('todolist element is null');
            return;
        }
        this.ListElement = element;
        this.editMode = false;
        console.log('TODOLIST created');
    }

    getListLength() {
        return this.dataList.length;
    }

    getCompleteNum() {
        const completedArray = this.dataList.filter((element) => element.isCompleted);
        return completedArray.length;
    }

    inputValidator(data) {
        if (data == null) {
            throw new Error('data is null or undefined');
        }
        if (data.text === undefined) {
            throw new Error('data has no text field.');
        }
        if (data.isCompleted === undefined) {
            throw new Error('data has no isCompleted field.');
        }
        if (typeof data.isCompleted !== 'boolean') {
            throw new Error('isCompleted field type is not boolean.');
        }
    }

    inputListValidator(datalist) {
        if (datalist == null) {
            return false;
        }
        return true;
    }

    render() {
        this.ListElement.innerHTML = '';
        if (this.dataList.length === 0) {
            return;
        }
        this.dataList.forEach((data) => {
            const todoItem = this.createItemElem(data);
            todoItem.innerHTML = data.isCompleted ?
                `<s>${data.text}</s>` : `${data.text}`;
            todoItem.id = data.id;
            if (this.editMode) {
                todoItem.appendChild(this.createDeleteButton(data));
            }
            this.ListElement.append(todoItem);
        });
    }

    createDeleteButton(data) {
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '삭제';
        deleteButton.onclick = () => {
            console.log(deleteButton.parentElement);
            this.dataList = removeDataFromArray(this.dataList, data);
        }
        return deleteButton;
    }

    createItemElem(data) {
        const itemElem = document.createElement('li');
        itemElem.onclick = () => {
            this.toggleComplete(data);
            this.onDataChanged();
        }
        return itemElem;
    }

    toggleComplete(data) {
        if (data != null) {
            data.isCompleted = !data.isCompleted;
        }
        return data;
    }

    setState(newDataList) {
        try {
            if (newDataList == null) {
                return;
            }
            newDataList.forEach(data => {
                this.inputValidator(data);
            })
            this.dataList = newDataList;
            this.onDataChanged();
        } catch (error) {
            console.error(error);
        }
    }

    addData(nextData) {
        try {
            this.inputValidator(nextData);
            if (this.dataList == null) {
                this.dataList = [];
            }
            this.dataList.push(nextData);
            this.onDataChanged();
        } catch (error) {
            console.error(error);
        }
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
        this.onDataChanged();
    }

    setOnDataChangedCallback(callback) {
        this.onDataChanged = callback;
    }
}
