const studyData1 = [
    {
      text : 'JS 공부하기',
      isCompleted : true,
    },
    {
      text : 'JS 복습하기',
      isCompleted : false,
    },
  ]
  
  const studyData2 = [
    {
      text : 'React.js',
      isCompleted : false,
    },
    {
      text : 'Node.js',
      isCompleted : false,
    }
  ]
  
  setTimeout(() => {
    todo2.setState([
      {
        text: 'PHP',
        isCompleted: true,
      },
      {
        text: 'Mysql',
        isCompleted: false,
      },
    ])
  
    todo1.setState([
      {
        text: 'TS 공부하기',
        isCompleted : true,
      },
      {
        text: 'TS 복습하기',
        isCompleted : false,
      }
    ])
  }, 3000)
  
  