import { checkFunctionCalledByNew, validateDOMElement, validateHistories } from '../validator.js'

export default function SearchHistory({ $target, state: { histories }, searchKeyword }) {
  try {
    checkFunctionCalledByNew(new.target)
    validateDOMElement($target)
    validateHistories(histories)
    this.$target = $target
    this.histories = histories

    this.$target.addEventListener(
      'click',
      ({
        target: {
          dataset: { keyword },
        },
      }) => {
        if (keyword) searchKeyword(keyword)
      }
    )

    this.setState = ({ histories }) => {
      validateHistories(histories)
      this.histories = histories
      this.render()
    }

    this.render = () => {
      this.$target.innerHTML = Object.keys(this.histories).reduce((htmlString, history) => htmlString + `<li data-keyword=${history}>${history}</li>`, '')
    }

    this.render()
  } catch (error) {
    console.log(error)
  }
}
