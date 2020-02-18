//TodoList.js

function TodoList(selector, data, handleEvents) {
  if (!(this instanceof TodoList)) {
    throw new Error('New 키워드 없이 실행됐습니다.')
  }

  checkSelector(selector)
  checkData(data)

  //$target == ulElement
  this.$target = document.querySelector(selector)
  this.data = data

  this.render = () => {
    this.$target.innerHTML = this.data
      .map((d, index) => {
        return d.isCompleted
          ? `<li data-index=${index}>${index + 1}. <s>${
              d.text
            }</s><button class="toggleBtn">Fin</button><button class="deleteBtn">Del</button></li>`
          : `<li data-index=${index}>${index + 1}. ${
              d.text
            }<button class="toggleBtn">Fin</button><button class="deleteBtn">Del</button></li>`
      })
      .join('')
  }

  //setState
  this.setState = newData => {
    checkData(newData)
    this.data = newData
    this.render()
  }

  //delete & toggle iSComplete Event to ulElement
  this.$target.addEventListener('click', function(e) {
    //Delete Event
    if (
      e.target &&
      e.target.nodeName === 'BUTTON' &&
      e.target.classList.contains('deleteBtn')
    ) {
      //del event
      console.log('del event triggered')
      const index = parseInt(e.target.parentNode.dataset.index)
      handleEvents.onDelete(index)
    }
    //Toggle Event
    else if (
      e.target &&
      e.target.nodeName === 'BUTTON' &&
      e.target.classList.contains('toggleBtn')
    ) {
      console.log('toggle event triggered')
      const index = parseInt(e.target.parentNode.dataset.index)
      handleEvents.onToggle(index)
    }
  })

  this.render()
}
