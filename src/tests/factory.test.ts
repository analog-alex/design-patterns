import { expect } from 'chai';
import 'mocha';

import { Factory } from '../factory/factory';

describe('Factory functional test', () => {
  it('creates a Pen product', () => {
    const pen = Factory.create('pen');

    expect(pen.name).to.equal('pen');
    expect(pen.do()).to.equal('I can write things!');
  });

  it('creates a Brush product', () => {
    const pen = Factory.create('brush');

    expect(pen.name).to.equal('brush');
    expect(pen.do()).to.equal('I can paint things!');
  });
});
