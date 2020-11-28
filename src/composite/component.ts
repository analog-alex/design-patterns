interface Component {
  operation() : string;
}

class Square implements Component {
  operation(): string {
    return ('I am a square!');
  }
}

class Circle implements Component {
  operation(): string {
    return ('I am a circle!');
  }
}

class Triangle implements Component {
  operation(): string {
    return ('I am a triangle!');
  }
}

export { Component, Square, Circle, Triangle };
