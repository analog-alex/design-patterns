import { Visitor } from './vistor';
import { Element, Boss, Employee } from './elements';

class VisitorOne implements Visitor<Boss> {
  visit(element: Element): void {
    if (element instanceof Boss) {
      element.operation();
      console.log('He really is!');

    } else if (element instanceof Employee) {
      element.operation();
      console.log('Have no idea who this guy is...');

    }
  }
}
