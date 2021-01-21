export default function TodoCount(todoCount) {

  this.todoCount = todoCount;

  this.render = () => {
    this.todoCount.innerHTML = (this.totalCount === this.completedCount && this.totalCount !== 0)
    ? `모든 일정을 완료했습니다!! 🎺🎺🎺(짝짝짝!!!)`
    : `${this.totalCount}개의 일정 중에 ${this.completedCount}개의 일정을 완료했습니다`;
  };

  this.countingTodo = (data) => {
    const totalCount = data.length;
    
    const completedCount = data.filter(({ isCompleted }) => !isCompleted).length;

    this.totalCount = totalCount;
    this.completedCount = completedCount;
    this.render();
  };

}
