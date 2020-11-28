import { expect } from 'chai';
import 'mocha';

import { Component, Square, Circle, Triangle } from '../composite/component';
import { Composite } from '../composite/composer';

describe('Composite functional test', () => {
  it('should print the correct message', () => {
    const component: Component = new Composite([
      new Circle(),
      new Square(),
    ]);

    const reduced = component.operation();

    expect(reduced).to.equal('I am a circle!:I am a square!');
  });

  it('should print the correct message, when passed with an inner component', () => {
    const inner: Component = new Composite([
      new Circle(),
      new Triangle(),
    ]);

    const component: Component = new Composite([
      new Square(),
      inner,
    ]);

    const reduced = component.operation();

    expect(reduced).to.equal('I am a square!:I am a circle!:I am a triangle!');
  });
});
