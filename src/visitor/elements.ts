import { Visitor } from './vistor';

interface Element {
  accept(visitor: Visitor<Element>): void;
  operation(): void;
}

class Boss implements Element {
  accept(visitor: Visitor<Element>) {
    visitor.visit(this);
  }

  operation() {
    console.log('I am the BOSS!');
  }
}

class Employee implements Element {
  accept(visitor: Visitor<Element>) {
    visitor.visit(this);
  }

  operation() {
    console.log('I am a lowly employee ... sniff!');
  }
}

export { Element, Boss, Employee };
