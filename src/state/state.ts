import { Context } from './context';

interface State {
  handle(context: Context, content: number): void;
  calculateTotalCompensation(): number;
}

class BossState implements State {
  private baseLine = 100_000;
  private extraPackage = 20_000;
  private bonus = 0;

  handle(context: Context, content: number): void {
    this.bonus = content;
    context.setState(this);
  }

  calculateTotalCompensation() {
    return this.baseLine + this.extraPackage + this.bonus;
  }
}

class EmployeeState implements State {
  private baseLine = 10_000;
  private bonus = 0;

  handle(context: Context, content: number): void {
    this.bonus = content;
    context.setState(this);
  }

  calculateTotalCompensation() {
    return this.baseLine + this.bonus;
  }
}

export { State, BossState, EmployeeState };
