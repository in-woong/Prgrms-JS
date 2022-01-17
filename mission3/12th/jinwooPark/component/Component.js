export default class Component {
  $target
  state
  props
  constructor({$target, initialState, ...props}) {
    this.$target = $target;
    this.state = initialState;
    this.props = props;
    this.setup();
    this.render();
  }

  setup(){

  }

  setState(nextState){
    this.state = {...this.state, ...nextState}
    this.render();
  }

  mounted(){

  }

  setEvent(){

  }

  template(){
    return '';
  }

  render(){
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }
}
