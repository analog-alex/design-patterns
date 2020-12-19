import { ConcreteCommandOne, ConcreteCommandTwo } from './command';

class Invoker {
  private commandOne = new ConcreteCommandOne();
  private commandTwo = new ConcreteCommandTwo();

  printIdentity() {
    this.commandOne.execute();
  }

  printSquareOfFive() {
    this.commandTwo.execute();
  }
}

export { Invoker };
