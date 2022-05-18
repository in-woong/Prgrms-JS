function TodoList(el){
    this.$el=el;
}

//가독성 향상을 위한 render함수 수정 ul태그는 감싸고 있고 reduce는 reduce의 관심사대로 드러날수있게..
TodoList.prototype.render=function(data){
    this.$el.innerHTML=`<ul>
        ${data.reduce((prev,curr)=>{
        return `${prev}<li> ${curr.isCompleted ? `<s>${curr.text}</s>`: curr.text} </li>`;
        }, '')}
    </ul>`;
}

//유연한 에러메시지 처리를 위해 msg 파라미터 추가.
TodoList.prototype.errorRender=function(msg){
    this.$el.innerHTML=`<span>${msg}</span>`
}

//유연한 에러메시지 처리 + 관심사별로 validation 분리처리(데이터 validation, 인스턴스 사용여부 2개로 분리)
TodoList.prototype.setState=function(nextData){
    if( (!this.validateData(nextData)) || (!this.isCreateInstance()) ){
        this.errorRender('로딩에 실패하였습니다.');
        return;
    }
    this.render(nextData);
}
/* 기존 validation 1개의 함수에서 관심사별로 validation 분리처리(데이터 validation, 인스턴스 사용여부 2개로 분리) */
TodoList.prototype.validateData=function(data){
    try{
        if(!data){//null or undefined (falsy활용)
            throw('No Data');
        }else if(typeof data !== 'object' || data.length === 0){//배열은 type이 object중 하나.. 배열의 길이를 이용해 배열의 여부를 판단합니다.
            throw('Not Correnct Data Type')
        }
    }catch(e){
        console.error(e);
        return false;
    }
    return true;
}
/* 기존 validation에 있는 인스턴스 사용여부를 확인하기 위해 관심사별로 validation 분리처리(데이터 validation, 인스턴스 사용여부 2개로 분리) */
TodoList.prototype.isCreateInstance=function(){
    try{
        if(this===window){//new 키워드를 안붙이고 함수 실행시 에러 발생. new 키워드를 이용하면, this는 TodoList 인스턴스(?)를 의미, 그냥 함수호출시 this는 window를 가리킴.
            throw('인스턴스를 생성하지 않았습니다.');
        }
    }catch(e){
        console.error(e);
        return false;
    }
    return true;
}

