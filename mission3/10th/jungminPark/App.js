import { fetchJjal } from "./api.js"
import SearchInput from "./SearchInput.js"
import SearchResult from "./SearchResult"

export default function App($app) {

    const searchInput = new SearchInput({
        $app,
        onSearch : async (keyword) => {
            const data = await fetchJjal(keyword)
            searchResult.setState(data)
        },
    })

    const searchResult = new SearchResult({
        $app,
        initialState : []
    })
}