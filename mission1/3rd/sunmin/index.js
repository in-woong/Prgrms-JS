const data = [{ text: 'JS 공부하기', isCompleted: false }, { text: 'JS 복습하기', isCompleted: true },{ text: 'TS 들여다보기', isCompleted: false }];
const app = new App({ data, elementId: 'app' });
app.render();