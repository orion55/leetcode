class Foo {
  constructor() {
    this.id = 'foo';
    this.print();
  }

  print() {
    console.log('foo ' + this.id);
  }
}

class Bar extends Foo {
  constructor() {
    super();
    this.id = 'bar';
    this.print();
    super.print();
  }
  print() {
    console.log('bar ' + this.id);
  }
}

new Bar();

/*
bar foo
bar bar
foo bar
 */
