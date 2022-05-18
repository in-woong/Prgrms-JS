export default function Storage() { // localStorage 컴포넌트 #91
  this.saveState = (state) => {
    localStorage.setItem('TodoList', JSON.stringify(state));
  }
  
  this.loadState = () => {
    return JSON.parse(localStorage.getItem('TodoList'));
  }
}
