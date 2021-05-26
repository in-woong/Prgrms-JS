import { checkNewKeyword, checkTarget } from '../validation.js'

export default function TodoRemoveBtn($removeAllBtn) {
  const validation = () => {
    checkNewKeyword(new.target);
    checkTarget($removeAllBtn);
  };

  validation();
  this.$removeAllBtn = $removeAllBtn;

  // 모두 삭제하기 커스텀 이벤트
  const removeAllEvent = new CustomEvent('removeAll', { bubbles: true });
  $removeAllBtn.addEventListener('click', (e) => {
    e.target.dispatchEvent(removeAllEvent);
  });
}
