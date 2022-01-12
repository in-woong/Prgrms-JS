export default function RemoveAll ({$target, initialState,onRemoveAll}) {
    this.$removeButton = document.createElement('button')
    this.$removeButton.className = 'button-remove'
    this.$removeButton.innerHTML = '전체 삭제'

    this.$target = document.querySelector('.section_todolist');
    this.$target.appendChild(this.$removeButton);
    
    this.state = initialState;
    this.onRemoveAll = onRemoveAll

    this.$removeButton.addEventListener('click',(e) => {
        const confirmMessage = confirm('⚠️삭제한 항목은 되돌릴 수 없습니다. 정말로 전체 삭제하시겠습니까?⚠️') 
        if (confirmMessage){
        this.onRemoveAll()
        }
    })
}
