export default function TodoInput($target, addItem){
    const submitBtn = document.getElementById('btn-submit')
    const userInput = document.getElementById('input-box')
    this.target = $target;
    
// 아이템 추가 이벤트 
    this.bindEvent = function(){
        submitBtn.addEventListener('click', ()=>{
            addItem(userInput.value);
            userInput.value='';   // 값을 초기화 
        });
    }
    //내부에서 실행시켜서, 바깥에서 굳이 호출할 필요 없게 
    this.bindEvent()
}
