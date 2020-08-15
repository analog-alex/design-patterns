import { Observer, Employee } from './observer';
import { Boss } from './subject';

const observer1: Observer = new Employee('John');
const observer2: Observer = new Employee('Michael');

const subject: Boss = new Boss('Mr. Business');

subject.follow(observer1);
subject.follow(observer2);

subject.giveOrders();
