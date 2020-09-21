"use strict";
// Interfaces
// It describe structure of an object. It describe how an object look like. We can make iterface with "interface" keyword. It is used to have an object. 
// Its a pure Typescript feature. No conversion of ts code into js code any more
// you can also use type instead of interface.
// BUT the major difference b/w both is that you can only use type definition inside interface but in type you can use other thing like union etc.
// When it comes to define object structure, interface is best. 
// I can share interface functionality with multiple class as a prototype.
// You can implement multiple interface in a class by seperating comma
// class Person implements Greetings, anotherInterface{}
// Also implement "readonly" in the interface as well as type 
// extends multiple interface using extends keyword
// interface is used to define a function type
// in Interface, we can also set optional value to the property as well as method of the object by adding "?". and call the parameter without the parameter. 
// type AddFn = (a: number, b: number)=> number;
let sum;
sum = (n1, n2) => {
    return n1 + n2;
};
console.log(sum(5, 4));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(query) {
        console.log(query + "  " + this.name + " is " + this.age + " Years ");
    }
}
let user;
user = new Person("max", 35);
user.greet("Hi,");
console.log(user);
