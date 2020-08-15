interface Component {
  operation() : void;
}

class Square implements Component {
  operation(): void {
    console.log('I am a square!');
  }
}

class Circle implements Component {
  operation(): void {
    console.log('I am a circle!');
  }
}

class Triangle implements Component {
  operation(): void {
    console.log('I am a triangle!');
  }
}

export { Component, Square, Circle, Triangle };
