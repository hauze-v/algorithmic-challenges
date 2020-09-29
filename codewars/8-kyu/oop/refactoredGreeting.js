/*
The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:
*/

class Person {
  constructor(myName) {
    this.myName = myName;
  }

  greet(yourName) {
    return `Hello ${yourName}, my name's ${this.myName}`
  }
}

let joe = new Person('Joe');
console.log(joe.greet('Katie')); // "Hello Kate, my name's Joe."
console.log(joe.myName) // Joe