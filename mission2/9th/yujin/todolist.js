import { checkArray, checkTarget, checkNewKeyword, checkTypes } from './validation.js'

export default function TodoList(data, $htmlid) {
    this.data = data
    this.$htmlid = $htmlid

    this.validation = (data) => {
        checkArray(data);
        checkTarget($htmlid);
        checkNewKeyword(this);
        checkTypes(data
            , ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean'
        )
    }

    this.render = () => {
        let htmlString = '<ul>'
        htmlString += this.data.map(({ text, isCompleted }) => isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`).join('')
        htmlString += '</ul>'
        document.querySelector($htmlid).innerHTML = htmlString;
    }

    this.setState = (nextState) => {
        this.validation(nextState)
        this.data = nextState
        this.render()
    }

    this.validation(this.data);
    this.render();
}
