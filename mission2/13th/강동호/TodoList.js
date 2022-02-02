<script>
  try{
    var data = [
      {
        text: 'JS 공부하기',
        isCompleted: true
      },
      {
        text: 'JS 복습하기',
        isCompleted: false
      }
    ]
    var dataInsideCompany = [
      {
        text: 'Javascript 학습',
        isCompleted: false
      },
      {
        text: 'JAVA 학습',
        isCompleted: false
      }
    ]
    var dataOutsideCompany = [
      {
        text: '운동 배우기',
        isCompleted: false
      },
      {
        text: '악기 배우기',
        isCompleted: false
      }
    ]
   
    function TodoList(data){
      if( !(this instanceof TodoList) || !Array.isArray(data) ){
        throw new Error('error message');
      }

      this.data = data;
      this.render = function(){
        var dataArray = this.data;
        for(value of dataArray){
          if(value.isCompleted === true){
            document.querySelector('#todo-list').innerHTML += '<s>' + value.text + '</s><br>';
          } else{
            document.querySelector('#todo-list').innerHTML += value.text+ '<br>';                  
          }
        }
      }

      this.setState = function(nextData){
        this.data = nextData;
        this.render();
      }

    }
  } catch(e){
    console.log(e);
  }
</script>
