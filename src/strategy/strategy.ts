interface Strategy {
  execute(content: string): void;
}

class UpperCaseStrategy implements Strategy {
  execute(content: string): void {
    console.log(content.toLocaleUpperCase());
  }
}

class LowerCaseStrategy implements Strategy {
  execute(content: string): void {
    console.log(content.toLocaleLowerCase());
  }
}

export { Strategy, UpperCaseStrategy, LowerCaseStrategy };
