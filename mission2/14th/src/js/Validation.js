import { TodoList } from "./TodoList.js";

/* 기존 validation 1개의 함수에서 관심사별로 validation 분리처리(데이터 validation, 인스턴스 사용여부 2개로 분리) */
/**
 * @param {*} data
 * @description Todo 추가시 안의 데이터 내용 확인
 */
const validateInsertData=(data)=>{
        if(!data){//null or undefined (falsy활용)
            return false;
        }else if(typeof data === 'object'){
            let {text,isCompleted}=data;
            if(typeof text !=='string' || typeof isCompleted !== 'boolean'){
                return false;
            }
        }
        return true;
};

/**
 * @param {*} data
 * @description TodoList에서 setState하기전에 데이터 validation
 */
const validationArrayData=(data)=>{
    if( (!Array.isArray(data)) ){
        return false;
    }else{

    }
    return true;
}
/* 기존 validation에 있는 인스턴스 사용여부를 확인하기 위해 관심사별로 validation 분리처리(데이터 validation, 인스턴스 사용여부 2개로 분리) */
/**
 * @param {*} instance
 * @description App,TodoInput,TodoCount,TodoList등 인스턴스 호출시 해당 함수가 new 키워드를 통해 호출했는지 확인하기위한 함수.
 */
const isCreateInstance=(instance)=>{
    if(!this instanceof instance){//new 키워드를 안붙이고 함수 실행시 에러 발생. new 키워드를 이용하면, this는 TodoList 인스턴스(?)를 의미, 그냥 함수호출시 this는 window를 가리킴.
        return false;
    }
    return true;
}

export {validateInsertData,isCreateInstance,validationArrayData};
