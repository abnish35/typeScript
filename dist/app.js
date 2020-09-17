"use strict";
// Interfaces
// It describe structure of an object. It describe how an object look like. We can make iterface with "interface" keyword. It is used to have an object. 
let user;
user = {
    name: "Max",
    age: 30,
    greet(query) {
        console.log(query + "  " + this.name + " is " + this.age + " Years ");
    }
};
user.greet("Hi,");
