import { BossState, EmployeeState } from './state';
import { Context } from './context';

const contexts = [
  new Context(new BossState()),
  new Context(new EmployeeState()),
  new Context(new EmployeeState()),
  new Context(new EmployeeState()),
];

contexts.forEach((context) => {
  context.useState(1000);
  console.log(context.seeTotalCompensation());
});
