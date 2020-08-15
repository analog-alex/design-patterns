import { Component } from './component';

abstract class Decorator implements Component {
  constructor(public component: Component) { }
  abstract operation(): void;
}

class ContreteDecorator1 extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  operation(): void {
    /*
     * adds description
     */
    console.log('Sum if the squares of all even numbers from 1 to 100:');
    super.component.operation();
  }

  private range(start: number, end: number): number[] {
    return [...Array(1 + end - start).keys()].map(v => start + v);
  }
}

class ContreteDecorator2 extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  operation(): void {
    /*
     * adds a separator
     */
    super.component.operation();
    console.log('-----------------------------------');
  }

  private range(start: number, end: number): number[] {
    return [...Array(1 + end - start).keys()].map(v => start + v);
  }
}

export { Decorator, ContreteDecorator1, ContreteDecorator2 };
