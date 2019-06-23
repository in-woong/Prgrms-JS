
function TodoList(data){
  this.data = data;

  // new를 이용해서 호출하지 않았을 경우, 에러처리
  if(!(this instanceof TodoList)){
    throw Error('!!!!!!!!!!!!!new를 이용해주세요!!!!!!!!!!!')
  }

  this.render = function(){
// ** render가 중복된다...흑흑
    const items = this.data.map(function(item){
      let child = document.createElement('li');
      child.innerHTML = `<li>${item.text}</li>`;
      return child;
    });
    console.log(items)

  }
  this.append = function(item){
      data.push({
        text: item.value,
        isCompleted: false
      });

      item.value = '';
      this.render();
  }
  // click 이벤트를 여기다 넣어야될가..
  this.completed = function(){
    const $item = document.querySelectorAll('li');
    console.log($item)
    $item.map(function(e){
      console.log(e)
    })

  }

  this.render();
  this.completed();
}
