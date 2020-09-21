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


// console.log("decorators running ...")

// function Logger(constructor: Function){
//     console.log("Logging...")
//     console.log(constructor)
// }

function Logger(logString: string){
    console.log("logger factory")
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}


function withTemplate(template: string, hookId: string) {
    console.log("template Factory...")
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        console.log(template)
        const p = new constructor();
        const p1 = document.createElement('p');
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.innerHTML = p.name; // "!" means always find "h1" element
            // hookEl.innerHTML = "This is another paragraph";
        }
    }
}

@Logger("Logger is running")
@withTemplate("<h1>This is decorator element</h1>", "app")
class PersonClass{
    name = "Abnish"; 
    constructor(){
        console.log("Creating Object ...")
    }
}

const person1 =  new PersonClass();
console.log(person1)

// DECORATOR PROPERTY

function Log(target: any, propertyName: string | symbol){
    console.log('Property Decorator...')
    console.log(propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Accessor Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log("Method Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | symbol, position: number){
    console.log("Parameter Decorator")
    console.log(target)
    console.log(name)
    console.log(position) // it starts with the index value i.e. 0;
}

// decorator "Log2" and "Log3" is returning something and typescript use it. 
// "Log2" => Accessor Decorator
// "Log3" => Method Decorator
// decorator "Log" and "Log4" also return sthing but TS ignore it.

class Product{
    @Log
    title: string;
    private _price: number;

    @Log2 // ac
    set price(val: number){
        if(val>0){
            this._price = val;
        }
        else{
            throw new Error("invalid price - it should be positive!")
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax( @Log4 tax: number){
        return this._price * (18+tax)
    }

}
