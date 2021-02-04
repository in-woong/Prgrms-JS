

function TodoCount({$app, data}){
 this.data = data
 
 const $target = document.createElement('div')
  $target.className = 'TodoCount'
  $app.appendChild($target)

 this.render = () => {
   const total = this.data.filter((todo) => todo.visible).length
   const done = this.data.filter((todo) => todo.isCompleted).length
   document.querySelector('.TodoCount').innerHTML = `총 할일: ${total} / 완료된 일: ${done}`
 }

 this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

 this.render()

}

export default TodoCount
