import { Component } from './component';

class Composite implements Component {
  private components: Component[];

  constructor(components: Component[]) {
    this.components = components;
  }

  operation(): void {
    this.components.forEach(component => component.operation());
  }

  add(component: Component) {
    this.components.push(component);
  }
}

export { Composite };
