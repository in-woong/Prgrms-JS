<script>
  var todoList = new TodoList(data);
  todoList.render();
  todoList.setState(dataInsideCompany);

  var todoListInsideCompany = new TodoList(dataInsideCompany);
  todoListInsideCompany.render();

  var todoListOutsideCompany = new TodoList(dataOutsideCompany);
  todoListOutsideCompany.render();
</script>
