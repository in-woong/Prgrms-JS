class Validator{
    constructor(){
    }

    isRightInstance(targetInstance, targetClass){
        return targetInstance instanceof targetClass;
    }

    isEmptyString(data){
        return data === "";
    }

    isNull(data){
        return data === null;
    }

    isUndefined(data){
        return data === null;
    }

    isArray(data){
        return Array.isArray(data);
    }

    isEmptyArray(data){
        return data.length == 0;
    }

    isString(data){
        return typeof data === 'string';
    }

    isEmptyString(data){
        return data.length == 0;
    }

    validateArrayData(data){
        if(!(this.isArray(data))){
            throw new Error(errorMessagesMap.IS_NOT_ARRAY);
        }
        if(this.isEmptyArray(data)){
            throw new Error(errorMessagesMap.IS_EMPTY_ARRAY);
        }
        return true;
    }

    validateString(data){
        if(!(this.isString(data))){
            throw new Error(errorMessagesMap.IS_NOT_STRING);
        }
        if(this.isEmptyString(data)){
            throw new Error(errorMessagesMap.IS_EMPTY_STRING);
        }
        return true;
    }
}

class TodoListValidator extends Validator {
    constructor() {
        super();
    }

    validate(todoList){
        this.validateArrayData(todoList.todoData);
        todoList.todoData.every(({ text }) => this.validateString(text));
        this.validateString(todoList.targetId);
        return true;
    }
}
