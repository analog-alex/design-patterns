import 'mocha';
import { expect } from 'chai';
import { Logger } from '../utils/logger.dummy';

import { Context } from '../strategy/context';

describe('Stategy functional test', () => {
  afterEach(() => Logger.flush());

  const context = new Context();

  it('correctly picks the "boss" strategy when a boss issues orders', () => {
    context.do('boss', 'Work!');

    const logged = Logger.clone();
    expect(logged).to.include('WORK!');
  });

  it('correctly picks the "default" strategy when a non-boss entity issues orders', () => {
    context.do('janitor', 'Clean!');

    const logged = Logger.clone();
    expect(logged).to.include('clean!');
  });
});
