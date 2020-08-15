interface Component {
  operation() : void;
}

class ConcreteComponent implements Component {

  operation(): void {
    /*
     * sum the squares of all even numbers between 1 and 100
     */
    const sum = this.range(0, 100)
      .map(i => i * i)
      .filter(i => i % 2 === 0)
      .reduce((acc, i) => acc + i);
    console.log(sum);
  }

  private range(start: number, end: number): number[] {
    return [...Array(1 + end - start).keys()].map(v => start + v);
  }
}

export { Component, ConcreteComponent };
