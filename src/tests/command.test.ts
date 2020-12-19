import { expect } from 'chai';
import 'mocha';
import { Logger } from '../utils/logger.dummy';

import { Command, ConcreteCommandOne, ConcreteCommandTwo } from '../command/command';
import { Invoker } from '../command/invoker';

describe('Command functional test', () => {
  afterEach(() => Logger.flush());

  it('executes the first command', () => {
    const invoker = new Invoker();

    invoker.printIdentity();

    const logged = Logger.clone();

    expect(logged).to.include('I am a concrete state.');
  });

  it('executes the second command', () => {
    const invoker = new Invoker();

    invoker.printSquareOfFive();

    const logged = Logger.clone();

    expect(logged).to.include('25');
  });
});
