import { SERVER_URL } from './contstant.js'
import ErrorViewer from './ErrorViewer.js'

export default async function getData(text) {
    try {
        const res = await fetch(`${SERVER_URL}?text=${text}`)
        const data = await res.json()

        return data
    } catch (e) {
        const errorView = new ErrorViewer({
            $target: document.querySelector('#error-message')
        }).render()
    }
}
