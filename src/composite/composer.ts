import { Component } from './component';

class Composite implements Component {
  private components: Component[];

  constructor(components: Component[]) {
    this.components = components;
  }

  operation(): string {
    return this.components.map(component => component.operation())
      .reduce((x, y) => `${x}:${y}`);
  }

  add(component: Component) {
    this.components.push(component);
  }
}

export { Composite };
