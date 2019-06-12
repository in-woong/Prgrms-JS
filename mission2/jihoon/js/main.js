(async function () {
  const app = new App('#app', '#search-keyword', '#search-result');
  app.render();
  app.listen();
})();
