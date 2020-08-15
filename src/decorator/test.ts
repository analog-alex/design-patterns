import { Component, ConcreteComponent } from './component';
import { ContreteDecorator1, ContreteDecorator2 } from './decorator';

const component: Component = new ConcreteComponent();

const decorators: Component[] = [
  new ContreteDecorator1(component),
  new ContreteDecorator2(component),
];

// call the opration methods

component.operation();
decorators.forEach(decorators => decorators.operation());
