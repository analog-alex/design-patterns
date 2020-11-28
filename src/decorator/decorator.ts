import { Component } from './component';
import { Logger } from '../utils/logger.dummy';

abstract class Decorator implements Component {
  constructor(public component: Component) { }
  abstract operation(): void;
}

class DescriptionDecorator extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  operation(): void {
    /*
     * adds description
     */
    Logger.info('Sum if the squares of all even numbers from 1 to 100:');
    this.component.operation();
  }
}

class SeparatorDecorator extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  operation(): void {
    /*
     * adds a separator
     */
    this.component.operation();
    Logger.info('-----------------------------------');
  }
}

export { Decorator, DescriptionDecorator, SeparatorDecorator };
