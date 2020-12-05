import 'mocha';
import { expect } from 'chai';

import { BossState, EmployeeState } from '../state/state';
import { Context } from '../state/context';

describe('State functional test', () => {
  it('calculates the compensation of a boss type with a zero bonus', () => {
    const context = new Context(new BossState());
    context.useState(0);
    const compensation = context.seeTotalCompensation();

    expect(compensation).to.equal(120_000);
  });

  it('calculates the compensation of a boss type with a above zero bonus', () => {
    const context = new Context(new BossState());
    context.useState(50);
    const compensation = context.seeTotalCompensation();

    expect(compensation).to.equal(120_050);
  });

  it('calculates the compensation of a employee type with a zero bonus', () => {
    const context = new Context(new EmployeeState());
    context.useState(0);
    const compensation = context.seeTotalCompensation();

    expect(compensation).to.equal(10_000);
  });

  it('calculates the total compensation of multiple types with a zero bonus', () => {
    const contexts = [
      new Context(new BossState()),
      new Context(new EmployeeState()),
      new Context(new EmployeeState()),
      new Context(new EmployeeState()),
    ];

    const compensation = contexts
      .map((context) => {
        context.useState(0);
        return context.seeTotalCompensation();
      })
      .reduce((acc, x) => acc + x);

    expect(compensation).to.equal(150_000);
  });
});
