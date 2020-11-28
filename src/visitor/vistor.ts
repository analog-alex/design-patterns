interface Visitor<T> {
  visit(element: T): void;
}

export { Visitor };
