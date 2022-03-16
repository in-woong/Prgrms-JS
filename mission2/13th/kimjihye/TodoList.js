function TodoList(data, list) {
  let html
  this.render = function () {
    for (let i = 0; i < data.length; i++) {
      if (data[i]['isCompleted'] == true) {
        let txt = data[i].text.replace('완료', '')
        html = `<div><s>${txt}</s> <a class="complete" href="javascript:;" data-num="${i}">취소(기능없음)</a></div>`
      } else {
        html = `<div>${data[i].text} <a class="complete" href="javascript:;" data-num="${i}"><strong>완료</strong></a></div>`
      }
      document.querySelector(list).innerHTML += html
    }
  }
  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }
  this.render()
}
