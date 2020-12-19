import 'mocha';
import { expect } from 'chai';
import { Logger } from '../utils/logger.dummy';

import { VisitorOne } from '../visitor/visitors';
import { Boss, Employee } from '../visitor/elements';

describe('Visitor functional test', () => {
  afterEach(() => Logger.flush());

  const visitor = new VisitorOne();

  it('correctly visits the "boss" element', () => {
    const boss = new Boss();

    boss.accept(visitor);

    const logged = Logger.clone();
    expect(logged).to.include('I am the BOSS!', 'He really is!');
  });

  it('correctly visits the "employee" element', () => {
    const employee = new Employee();

    employee.accept(visitor);

    const logged = Logger.clone();
    expect(logged).to.include('I am a lowly employee ... sniff!', "'Have no idea who this guy is...'");
  });
});
