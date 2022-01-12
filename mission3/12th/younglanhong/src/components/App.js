import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'  
import SearchResult from './SearchResult.js'  

import { storage } from '../utils/storage.js'
import { request } from '../utils/api/api.js'
import { isEmptyArray } from '../utils/validation.js'


export default function App($app, initialState = []) {
  this.$target = $app
  this.state = initialState
  this.history = new Set()
  this.storedHistory = storage.getStorageData('history')

  this.setState = nextState => {
    this.state = nextState

    searchResult.setState(this.state)
  }

  // TODO: 리팩토링
  // 히스토리의 중복 저장을 막기 위해 2개의 상태를 사용하고 있다.
  // (1. Set 형태의 history, 2.localStorage에서 불러오는 storedHistory)
  //  App 컴포넌트가 복잡해지고, 혼란을 줄 수 있기 때문에 중복 저장을 방지하는 다른 방법을 찾아보자.
  //  - 배열 형태의 history 상태 하나만 두고, history에 추가할 때 중복 체크하도록 수정한다.

  this.fetchData = async (keyword) => {
    try {
      const responseData = await request.get(keyword)
      const data = await responseData.json()
      if(data) {
        this.setState(data)  // 검색 성공 시 상태 업데이트
      }
      return data
    } catch(err) {
      console.error(err)
    } 
  }

  this.updateStoredHistory = (key = 'history') => {
    storage.setStorageData(key, JSON.stringify(Array.from(this.history)))
    this.storedHistory = storage.getStorageData(key)
    searchHistory.setStoredHistory(this.storedHistory)
  }

  this.setHistory = newHistory => {
    this.history.add(newHistory)
    searchHistory.setHistory(this.history)

    this.updateStoredHistory()
  }

  const searchHistory = new SearchHistory({ 
    history: this.history,
    storedHistory: this.storedHistory,
    onClick: this.fetchData
  })

  const searchInput = new SearchInput({
    onSearch: this.fetchData,
    history: this.history,
    addHistory: (newHistory, data) => { 
      // 검색 성공 & 렌더링 일어난 경우만 키워드 히스토리에 추가
      if(!isEmptyArray(data)) {
        this.setHistory(newHistory)
      }
    }
  })

  const searchResult = new SearchResult({
    initialState: this.state
  })
}
