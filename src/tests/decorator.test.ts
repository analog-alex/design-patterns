import 'mocha';
import { expect } from 'chai';

import { Logger } from '../utils/logger.dummy';

import { Component, ConcreteComponent } from '../decorator/component';
import { DescriptionDecorator, SeparatorDecorator } from '../decorator/decorator';

describe('Decorator functional test', () => {
  afterEach(() => Logger.flush());

  it('should log the correct message with a seperator after', async () => {
    const component: Component = new ConcreteComponent();

    const decorators: Component[] = [
      new SeparatorDecorator(component),
    ];

    // call the operation methods
    decorators.forEach(decorators => decorators.operation());

    const logged = Logger.clone();

    expect(logged).to.have.members(['171700', '-----------------------------------']);
  });

  it('should log the correct message with a description', () => {
    const component: Component = new ConcreteComponent();

    const decorators: Component[] = [
      new DescriptionDecorator(component),
    ];

    // call the operation methods
    decorators.forEach(decorators => decorators.operation());

    const logged = Logger.clone();

    expect(logged).to.have.members(['Sum if the squares of all even numbers from 1 to 100:', '171700']);
  });

  it('should compose the decorators in order', () => {
    const component: Component = new ConcreteComponent();

    const decorators: Component[] = [
      new DescriptionDecorator(new SeparatorDecorator(component)),
    ];

    // call the operation methods
    decorators.forEach(decorators => decorators.operation());

    const logged = Logger.clone();

    expect(logged).to.have.members([
      'Sum if the squares of all even numbers from 1 to 100:',
      '171700',
      '-----------------------------------',
    ]);
  });
});
