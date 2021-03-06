import { Visitor } from './vistor';
import { Logger } from '../utils/logger.dummy';

interface Element {
  accept(visitor: Visitor<Element>): void;
  operation(): void;
}

class Boss implements Element {
  accept(visitor: Visitor<Element>) {
    visitor.visit(this);
  }

  operation() {
    Logger.info('I am the BOSS!');
  }
}

class Employee implements Element {
  accept(visitor: Visitor<Element>) {
    visitor.visit(this);
  }

  operation() {
    Logger.info('I am a lowly employee ... sniff!');
  }
}

export { Element, Boss, Employee };
