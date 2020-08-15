import { Observer } from './observer';

interface Subject { // or Observable
  follow(observer: Observer): void;
  unfollow(observer: Observer): void;
  notify(): void;
}

class Boss implements Subject {
  private observers: Observer[] = [];
  private name: String = '';
  private title: String = 'CEO';

  constructor(name: String) {
    this.name = name;
  }

  follow(observer: Observer): void {
    if (!this.isFollowed(observer)) {
      this.observers.push(observer);
    }
  }

  unfollow(observer: Observer): void {
    const index = this.observers.findIndex(o => o.id() === observer.id());
    this.observers = this.observers.splice(index, 1);
  }

  notify(): void {
    this.observers.forEach(o => o.update('work!'));
  }

  /*
   * the boss does boss like things
   */
  giveOrders(): void {
    console.log(`As the ${this.title}, I, ${this.name}, am barking orders!`);
    this.notify();
  }

  /*
   * some private method to aid the implementation
   */
  private isFollowed(observer: Observer): boolean {
    return this.observers.filter(o => o.id() === observer.id()).length === 1;
  }
}

export { Subject, Boss };
