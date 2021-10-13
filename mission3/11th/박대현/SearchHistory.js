export default function(data) {
  const $history = document.createElement('ul');
  $history.className = "history";
  
  this.data = data;
  this.element = $history;
  this.listenClick = func => $history.addEventListener('click', (e) => {
    // 이벤트 위임하기
    const $child = e.target;
    const $parent = $child.parentElement;
    if($parent.classList.contains('history') ) {
      for(const childNode of $parent.childNodes){
        if(childNode === $child) {
          func($child.innerText.trim());
          break;
        }
      }
    }
  })
  this.render = () => {
    $history.innerHTML = this.data.reduce((acc,item) => acc+`<li>${item}</li>` ,'');
  }
  this.setState = newData => {
    this.data = [...newData];
    this.render();
  }
  this.addHistory = newHistory => {
    this.setState([...this.data, newHistory]);
  }

}
