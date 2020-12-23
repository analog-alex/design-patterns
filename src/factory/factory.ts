class Factory {
  static create(type: 'pen' | 'brush'): Product {
    switch (type) {
      case 'pen': {
        return new Pen();
      }

      case 'brush': {
        return new Brush();
      }
    }
  }
}

interface Product {
  name: string;
  do(): string;
}

class Pen implements Product {
  name: string = 'pen';

  do(): string {
    return 'I can write things!';
  }
}

class Brush implements Product {
  name: string = 'brush';

  do(): string {
    return 'I can paint things!';
  }
}

export { Factory };
