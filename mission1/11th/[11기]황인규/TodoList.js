const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
    undefined
    ,
    
  ]
  
  const data2 = [
    {
      text: 'JS 공부하기2',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기2',
      isCompleted: false,
    },
  ]

  const data3 = [
    {
      text: 'JS 공부하기3',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기3',
      isCompleted: false,
    },
  ]

  function validationCheck(data){
    this.state = data 
    //[Mission1] 보너스 구현사항 예외 처리 구현
    if(!this.state)
      throw new Error('빈 데이터 입니다.')
    if(!Array.isArray(this.state))
      throw new Error('Array형태가 아닙니다.')
    this.state.forEach(function(element){
        
        if(typeof element !== undefined) 
            throw new Error('데이터 형식이 잘못되었습니다.')
        if(typeof element.text !== 'string')
            throw new Error('데이터 타입이 string이 아닙니다.')
        if(typeof element.isCompleted !== 'boolean')
            throw new Error('데이터 타입이 boolean이 아닙니다.')
    })
    
  }
  
  //[Mission1] : TodoList 함수 생성
  function TodoList(data, selector){
    
    this.state = data 
    
    validationCheck(this.state)
    //[Mission1] 보너스 new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기 
    if(!new.target){
        throw new Error('new로 객체를 생성해주세요');
    }
  
    this.render = function(){
        try{
            this.state.reduce((acc, cur, i) =>{
                //[Mission1] 보너스 구현사항 isCompleted 처리
                if(cur.isCompleted===true){
                    document.querySelector(`#${selector}`).innerHTML+=`<div><s>${cur.text}</s></div>`
                }else{
                    document.querySelector(`#${selector}`).innerHTML+=`<div>${cur.text}</div>`
                }
            },"")
        }catch(e){
            console.log(e);
        }
    }

    //[Mission1] 보너스 구현사항 setState
    this.setState = function(nextData){
        try{
            this.state = nextData
            document.querySelector('#todo-list').innerHTML="";
            this.render()
        }catch(e){
            console.log(e)
        }
    }
}

//[Mission1] 보너스 구현사항 todolist 2개 추가 
function TodoList2(data2, selector){

  this.state = data2;
  validationCheck(this.state)
  if(!new.target){
     throw new Error('new로 객체를 생성해주세요');
    }
    

    this.render = function(){
        try{
            this.state.reduce((acc, cur, i) =>{
                if(cur.isCompleted===true){
                    document.querySelector(`#${selector}`).innerHTML+=`<div><s>${cur.text}</s></div>`
                }else{
                    document.querySelector(`#${selector}`).innerHTML+=`<div>${cur.text}</div>`
                }
            },"")
        }catch(e){
            console.log(e);
        }
    }
}

//[Mission1] 보너스 구현사항 todolist 2개 추가 
function TodoList3(data3){
   
  this.state = data3
  //Validation
  validationCheck(this.state)
  if(!new.target){
     throw new Error('new로 객체를 생성해주세요');
    }

    
   this.render = function(){
        try{
            data3.reduce((acc, cur, i) =>{
                if(cur.isCompleted===true){
                    document.querySelector(`#${selector}`).innerHTML+=`<div><s>${cur.text}</s></div>`
                }else{
                    document.querySelector(`#${selector}`).innerHTML+=`<div>${cur.text}</div>`
                }
            },"")
        }catch(e){
            console.log(e);
        }
    }

}

var todoList = new TodoList(data, 'todo-list');


todoList.render();

todoList2.render();
todoList3.render();
todoList.setState([
    {
        text: 'setState',
        isCompleted: true,
    }
])

