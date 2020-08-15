import { State } from './state';

class Context {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  setState(state: State) {
    this.state = state;
  }

  useState(bonus: number) {
    this.state.handle(this, bonus);
  }

  seeTotalCompensation(): number {
    return this.state.calculateTotalCompensation();
  }
}

export { Context };
