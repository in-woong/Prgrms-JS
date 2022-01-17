function TodoList($target, data) {

    validationData(data);

    this.$target = $target
    this.data = data
  
    this.render = function() {
      this.$target.innerHTML = this.data
        .map(todo => todo.isCompleted ? `<div><s>${todo.text}</s></div>` : `<div>${todo.text}<button id="del">삭제</button></div>`)
        .join('')
    }
  
    this.setState = function(nextData) {
      this.data = nextData
      this.render()
    }

    function validationData (data) {
      if(!data) {
        throw new Error('data 값이 비어 있습니다.');
      }

      if (!Array.isArray(data)) {
        throw new Error('파라미터가 배열이 아닙니다.');
      }

      data.forEach((item) => {
        if (!item.hasOwnProperty('text') || !item.hasOwnProperty('isCompleted')) {
          throw new Error('넘어온 파라미터 속성이 올바르지 않습니다.');
        }
        
        if (!(typeof item.text === 'string') || !(typeof item.isCompleted === 'boolean')) {
          throw new Error('넘어온 파라미터 자료형이 올바르지 않습니다.');
        }
      })
    }

  }
  