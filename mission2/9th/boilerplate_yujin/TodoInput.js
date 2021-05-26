export default function TodoInput ({ $app , onAddTodo }) {
    
    const $target = document.createElement('input')
    $target.className = 'TodoInput'
    this.$target = $target ; 
    $app.appendChild($target);

    this.onAddTodo = onAddTodo ;

    this.render = () => {}

    this.initEvent = () => {
        this.$target.addEventListener('keydown' , (e) =>{
            const { value } = e.target ; 

            if(value.length > 0 && e.key === 'Enter'){
                this.onAddTodo(value) ;      //여기서는 함수를 호출하는 역할만! 실제 데이터를 추가하는 것은 App에서
                this.$target.value ='';
                this.$target.focus();
            }
        })
    }

    this.render();
    this.initEvent();
}