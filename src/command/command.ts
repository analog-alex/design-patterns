import { Logger } from '../utils/logger.dummy';

interface Command {
  execute(): void;
}

class ConcreteCommandOne implements Command {
  private state: string = 'I am a concrete state.';
  private receiver: Receiver;

  constructor() {
    this.receiver = new Receiver();
  }

  execute() {
    this.receiver.actionOne(this.state);
  }
}

class ConcreteCommandTwo implements Command {
  private state: number = 5;
  private receiver: Receiver;

  constructor() {
    this.receiver = new Receiver();
  }

  execute() {
    this.receiver.actionTwo(this.state);
  }
}

class Receiver {
  actionOne(receive: string) {
    Logger.info(receive);
  }

  actionTwo(receive: number) {
    Logger.info((receive * receive).toString());
  }
}

export { Command, ConcreteCommandOne, ConcreteCommandTwo };
