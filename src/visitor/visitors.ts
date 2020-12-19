import { Visitor } from './vistor';
import { Element, Boss, Employee } from './elements';

import { Logger } from '../utils/logger.dummy';

class VisitorOne implements Visitor<Boss> {
  visit(element: Element): void {
    if (element instanceof Boss) {
      element.operation();
      Logger.info('He really is!');

    } else if (element instanceof Employee) {
      element.operation();
      Logger.info('Have no idea who this guy is...');

    }
  }
}

export { VisitorOne };
