import { debounce } from './utils.js';
export default function(updateResult, updateHistory){
  const $input = document.createElement('input');
  
  // keyword를 받으면 비동기 처리를 통해 짤방을 로드한다.
  this.loadData = async keyword => {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      const data = await response.json();
      // 짤방을 로드하면 result에 곧바로 반영한다.
      updateResult(data);
    } catch (error) {
      console.log(error);
      alert('데이터를 불러오는데 실패하였습니다');
    }
  }
  
  // input에 키를 누를 때마다 호출된다.
  const handleKeyup = () => {
    let priorKeyword = '';
    return  debounce(async (e) => {
      const keyword = e.target.value.trim();
      // keyword가 공백일 때와 alt나 ctrl과 같이 입력값에는 영향을 미치지 않지만 이벤트를 발생시키는 것들을 막는다.
      if(keyword==='' || keyword === priorKeyword) return;
      this.loadData(keyword);
      // 인풋에 직접 입력했을 때만 히스토리를 업데이트한다.
      updateHistory(keyword);   
    }, 600);
}

  $input.addEventListener('keyup', handleKeyup());
  
  this.element = $input;
};
