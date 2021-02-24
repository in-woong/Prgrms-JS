import { fetchJjal } from "./api.js"
import SearchInput from "./SearchInput.js"
import SearchResult from "./SearchResult"

export default function App($app) {
    
    const searchInput = new SearchInput({
        $app,
        onSearch : (keyword) => {
            fetchJjal(keyword).then((data) => {
                console.log(data)
                searchResult.setState(data)
            })
        },
    })

    const searchResult = new SearchResult({
        $app,
        initialState : []
    })
}