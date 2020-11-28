import 'mocha';
import { expect } from 'chai';
import { Logger } from '../utils/logger.dummy';

import { Observer, Employee } from '../observer/observer';
import { Boss } from '../observer/subject';

describe('Observer functional test', () => {
  afterEach(() => Logger.flush());

  it('notifies the observers followed by the subject', () => {
    const observer1: Observer = new Employee('John');
    const observer2: Observer = new Employee('Michael');

    const subject: Boss = new Boss('Mr. Business');

    subject.follow(observer1);
    subject.follow(observer2);

    subject.giveOrders();

    const logged = Logger.clone();

    expect(logged).to.include("I'm John and I'm being ordered to work!");
    expect(logged).to.include("I'm Michael and I'm being ordered to work!");
  });
});
