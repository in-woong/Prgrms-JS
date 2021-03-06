class SearchController {
  constructor(api) {
    this.view = new SearchView(this, document.getElementById('app'));
    this.model = new SearchModel();
    //
    this.api = api;
    //
    this.view.setResult(this.model.data)
  }

  onSearch = (value) => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      this.initModel();
      if (value) {
        this.view.setLoading(true);
        const result = await this.getJjalList(value);
        this.view.setLoading(false);
        this.updateModel(result);
      } else {
        this.view.setResult(null)
      }
    }, 200);
  }

  initModel = () => this.model.reset();
  updateModel = (result) => {
    this.model.set(result);
    this.view.setResult(this.model.data);
  }

  getJjalList = async (value) => await this.api.getJjalList(value)
}
