let loggedMessages: string[] = [];

class Logger {
  static info (msg: string): void {
    loggedMessages.push(msg);
  }

  static flush(): void {
    loggedMessages = [];
  }

  static clone(): string[] {
    const copy: string[] = [];
    loggedMessages.forEach(msg => copy.push(msg));
    return copy;
  }

  static print(): void {
    loggedMessages.forEach(msg => console.log(msg));
  }
}

export { Logger };
