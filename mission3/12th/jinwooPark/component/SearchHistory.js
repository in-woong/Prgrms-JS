import Component from './Component.js'

export default class SearchHistory extends Component{

  template(){
    const htmlString = this.props.historyList.map((history) => {
      return `<li>${history}</li>`
    });
    return htmlString.join('');
  }

  setEvent() {
    this.$target.addEventListener("click", (e) => {
      const $li = e.target.closest("li")

      this.props.changeSearchItems($li.innerText, false)
    })
  }

}
