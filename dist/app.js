"use strict";
// Decorators=> it is used in the metaprogramming
// Decorator executed when class is define
// JS finds decorator when class definition not instantiate of the object
// Decorator Receives arguments
// Decorators is used with "@"
// Decorator are giving the leverage to pass the template as a argument and render it on the DOM.
// We can add decorators to classes
// Working with decorator factories
// return the customised output
// "_" it means typescript knows it or aware of it but it won't use it.
// Execution of decorator function has bottom Up
// Execution of Logger Factory is performed according to JS Rule
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// console.log("decorators running ...")
// function Logger(constructor: Function){
//     console.log("Logging...")
//     console.log(constructor)
// }
function Logger(logString) {
    console.log("logger factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    console.log("template Factory...");
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        console.log(template);
        const p = new constructor();
        const p1 = document.createElement('p');
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').innerHTML = p.name; // "!" means always find "h1" element
            // hookEl.innerHTML = "This is another paragraph";
        }
    };
}
let PersonClass = class PersonClass {
    constructor() {
        this.name = "Abnish";
        console.log("Creating Object ...");
    }
};
PersonClass = __decorate([
    Logger("Logger is running"),
    withTemplate("<h1>This is decorator element</h1>", "app")
], PersonClass);
const person1 = new PersonClass();
console.log(person1);
// DECORATOR PROPERTY
function Log(target, propertyName) {
    console.log('Property Decorator...');
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position); // it starts with the index value i.e. 0;
}
// decorator "Log2" and "Log3" is returning something and typescript use it. 
// "Log2" => Accessor Decorator
// "Log3" => Method Decorator
// decorator "Log" and "Log4" also return sthing but TS ignore it.
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("invalid price - it should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (18 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2 // ac
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
