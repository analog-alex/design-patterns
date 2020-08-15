import { Component, Square, Circle, Triangle } from './component';
import { Composite } from './composer';

const inner: Component = new Composite([
  new Circle(),
  new Triangle(),
]);

const component: Component = new Composite([
  new Square(),
  inner,
]);

component.operation();
