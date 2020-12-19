import { Logger } from '../utils/logger.dummy';

interface Strategy {
  execute(content: string): void;
}

class UpperCaseStrategy implements Strategy {
  execute(content: string): void {
    Logger.info(content.toLocaleUpperCase());
  }
}

class LowerCaseStrategy implements Strategy {
  execute(content: string): void {
    Logger.info(content.toLocaleLowerCase());
  }
}

export { Strategy, UpperCaseStrategy, LowerCaseStrategy };
