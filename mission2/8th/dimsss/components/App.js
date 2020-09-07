export default function App (child, storage) {
  this.element = document.querySelector('#app');
  this.child = child;
  this.storage = storage;

  this.init = (appCompontnt) => {
    for (const componentName in this.child) {
      if (this.child[componentName]) this.child[componentName].root = appCompontnt;
    }

    this.render(this.createHTML());
    this.addChildEvent();
    this.addChildCustomEvent();
    this.addCustomEvent();
  }

  this.createHTML = () => {
    const html = [];
    
    for (const componentName in this.child) {
      if (this.child[componentName]) html.push(this.child[componentName].createView());
    }

    return html.join('');
  }

  this.render = (html) => {
    this.element.innerHTML = html;
  }

  this.addChildEvent = () => {
    for (const componentName in this.child) {
      const componentEvent = this.child[componentName].eventName;
      const component = this.child[componentName];

      if (component.createEvent) this.element.addEventListener(componentEvent, component.createEvent(this.child));
    }  
  }

  this.addChildCustomEvent = () => {
    for (const componentName in this.child) {
      const component = this.child[componentName];
      const componentEvent = this.child[componentName].eventName;

      if (component.createCustomEvent) this.element.addEventListener(componentEvent, component.createCustomEvent());
    }  
  }

  this.addCustomEvent = () => {
    this.element.addEventListener('removeAll', (e) => {
      e.detail.removeAllTodo();
    })
  }
}
