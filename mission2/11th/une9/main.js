try {
    const todoList = new App(data, 'TODO-LIST');
    const todoListWeekly = new App(data2, 'WEEKLY-TODO-LIST');
    const todoListMonthly = new App(data2, 'MONTHLY-TODO-LIST');
} catch(e) {
    console.error(e);
}
