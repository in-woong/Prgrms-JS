function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .filter(todo => todo.visible === true)
      .map(todo => todo.isCompleted? `<div style="display: inline-flex;margin-bottom: 5px;"><div onclick="isCompletedCheck(${todo.id})"><s style="color:gray">(완료) ${todo.text}</s></div> <button class="remove" onclick="Remove(${todo.id})">삭제</button> </div>` :
       `<div style="display: inline-flex;margin-bottom: 5px;"> <div onclick="isCompletedCheck(${todo.id})">${todo.text}</div> <button class="remove" onclick="Remove(${todo.id})">삭제</button> </div>`)
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}

function CreateTodo($createTarget, $id){
  // 가져온 객체에 EventListener 를 추가한다. keypress = 키입력 감지 
  document.getElementById("create-todo").addEventListener('keypress', function(key){ 

    // key.key 의 값이 Enter 일 경우 코드 실행  
    if( key.key == 'Enter' || key.key == 13 ){ 

      inputValue = $createTarget.value
      if( inputValue.length === 0 ){
        alert("할 일을 입력해주세요~")
      }else{
        data.push({
          id: data.length+1,
          text: `${inputValue}`,
          isCompleted: false,
          visible:true,
        }) 
  
        TodoList($target, data)
        $createTarget.value = ''
        //inputValue = '' 이 경우엔 입력창이 초기화가 되지 않습니다. 왜 그런지 궁금합니다.
      }
    }
  })
}

function Remove($targetId){
  data[$targetId-1].visible = false
  TodoList($target, data)
}

function isCompletedCheck($targetId){

  if(data[$targetId-1].isCompleted){  //할 일이 완료된 상태면 false로 변경한다.
    data[$targetId-1].isCompleted = false
  }else{
    data[$targetId-1].isCompleted = true
  }
  TodoList($target, data)
}
