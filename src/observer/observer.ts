import { Subject } from './subject';

interface Observer {
  update(order: String): void;
  id(): String;
}

class Employee implements Observer {
  private identifier: String = '';

  constructor(identifier: String) {
    this.identifier = identifier;
  }

  update(order: String): void {
    console.log(`I'm ${this.id()} and I'm being ordered to ${order}`);
  }

  id(): String {
    return this.identifier;
  }
}

export { Observer, Employee };
