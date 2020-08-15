import { Strategy, UpperCaseStrategy, LowerCaseStrategy } from './strategy';

class Context {
  private strategies = new Map<string, Strategy>([
        ['upper', new UpperCaseStrategy()],
        ['lower', new LowerCaseStrategy()],
  ]);

  do(requestedBy: string, order: string) {
    if (requestedBy === 'boss') {
      this.strategies.get('upper').execute(order);
    } else {
      this.strategies.get('lower').execute(order);
    }
  }
}

export { Context };
