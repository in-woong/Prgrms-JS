const mainPage = new TodoPage(exampleData);

setTimeout(() => {
    mainPage.setState(exampleData2);    
}, 2000);
