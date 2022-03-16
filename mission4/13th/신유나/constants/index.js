const TODO_ITEM_STATUS_ENUM = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
}

const MOCK_TODO = [
  {
    id: 1,
    text: '미션2 시작하기',
    isCompleted: false,
    status: TODO_ITEM_STATUS_ENUM['TODO'],
  },
  {
    id: 2,
    text: '바닐라 JS 공부하기',
    isCompleted: false,
    status: TODO_ITEM_STATUS_ENUM['TODO'],
  },
]

const ERR_MSG = {
  NO_DATA: '데이터가 존재하지 않습니다.',
  NO_ELEMENT: '엘리먼트가 존재하지 않습니다.',
  INVAILD_DATA: '데이터 형식이 올바르지 않습니다.',
  API_ERROR: 'API 에러가 발생했습니다.',
  SERVER_ERROR: '서버 에러가 발생했습니다.',
}

const STORAGE_KEY = 'todos'

export { MOCK_TODO, ERR_MSG, TODO_ITEM_STATUS_ENUM, STORAGE_KEY }
