import { checkParam } from '../util/CheckParam.js';

export default function TodoList({ $app, initialState, isCompleted, onChange, onDelete }) {
  if (!new.target) {
    //보너스: new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
    throw new Error('new 키워드를 사용해주세요!');
  }
  this.state = initialState;
  this.$isCompleted = isCompleted;
  this.onchange = onChange;
  this.ondelete = onDelete;

  this.$List = document.createElement('div');
  this.$List.className = 'todo-list';
  this.$List.setAttribute('data-completed', this.$isCompleted? 'true' : 'false');
  $app.appendChild(this.$List);

  //보너스 문제 setState 새롭게 렌더링
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log(this.state)
    if (!checkParam(this.state)) {
      //nextData도 데이터 체크
      throw new Error('올바른 데이터가 아닙니다.');
    }


    this.$List.innerHTML = this.$isCompleted? `<h1>완료한 일</h1>
                                    <ul>
                                        ${this.state.filter(data => data.isCompleted === true)
                                              .map((data) => {
                                                return `<li data-id='${data._id}' draggable='true'>
                                                            <s>${data.content? data.content: ''}</s>
                                                            <button data-id='${data._id}'>삭제</button>
                                                        </li>`;
                                            }).join('')}
                                    </ul>` 
                                    : `<h1>해야할 일</h1>
                                    <ul>
                                    ${this.state.filter(data => data.isCompleted === false)
                                              .map((data) => {
                                                return `<li data-id='${data._id}' draggable='true'>
                                                            ${data.content? data.content: ''}
                                                            <button data-id='${data._id}'>삭제</button>
                                                        </li>`;
                                            }).join('')}
                                    </ul>`;
                                    
  };

  this.$List.addEventListener("dragstart", e => {
    const $startNode = e.target.closest('div')
    const completed = $startNode.dataset.completed;
    e.dataTransfer.setData('text/plain', JSON.stringify({
      id: e.target.dataset.id, // toggle용 id
      completed, // completed
    }))
  });

  this.$List.addEventListener("dragover", e=> {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  });

  this.$List.addEventListener("drop", e => {
    const $endNode = e.target.closest('div');
    const endCompleted = $endNode.dataset.completed;
    const { id: targetId, completed: startCompleted } = JSON.parse(e.dataTransfer.getData('text/plain'))
    if (targetId) {
      if (startCompleted !== endCompleted) { // 드래그 스타트, 엔드 지점이 다른 경우에만 toggle
        this.onchange(targetId);
      }
    }
  });

  //todo-list 목록 이벤트 모음
  this.$List.addEventListener('click', (e) => {
    const eTarget = e.target;
    if (eTarget.tagName === 'LI') {
      const id = eTarget.dataset.id;
      this.onchange(id);
    }
    if (eTarget.tagName === 'S') {
      const id = eTarget.closest('LI').dataset.id;
      this.onchange(id);
    }
    if (eTarget.tagName === 'BUTTON') {
      const id = eTarget.dataset.id;
      this.ondelete(id);
    }
  });

  this.render();
}
