"use strict";
// Generic -> is is an another type which is connected with other type and is flexible regarding which exact type our type is. 
// It helps you to get additional type information if data is more complex class or methods;
console.log("genetics   is running");
// Array type generics
const names = []; // similar to string[]
//names[0].split(" ");
// Another is Promise Type 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('THis is resolved ');
    }, 2000);
});
promise.then(data => {
    if (typeof data === "string") {
        data.split(' ');
    }
});
// Object Type
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedObj = (merge({ name: "Abnish" }, { age: 30 }));
// mergedObj.name;
// In above case, If I try to access the mergedOBj.name it will give me an error.
// Now in this case Generic type incorporated.
// When I make obj1 and obj2 as a generinc type then compiler donot know about the return type of function. 
function merges(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedObject = merges({ name: "Alok Kumar" }, { age: 35 });
const mergedObject2 = merges({ name: "Ashish Kumar" }, { age: 32 });
console.log(mergedObject, mergedObject2);
function countAndDescribe(element) {
    let descriptionText = "Got No Value";
    if (element.length === 1) {
        descriptionText = "GOT 1 Element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " Elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("HI tHRERE NAME"));
console.log(["sports", 'coding']);
console.log([]);
// In the above example, He I got about generic function. Idea is similar to before. We want to a bit unspecific about the data we get. We don't really care about the parameter of the function weather it is string, number or other type which has a length property. We just depends on the <T extends Lengthy> has length property. and based on that we find the length.
// EXTRACT AND CONVERT // kEYOF CONSTRAINTS=> If we want to extract the key from an object, We use "keyof" constraints. 
function extractAndConvert(obj, key) {
    return "value is " + obj[key];
}
console.log(extractAndConvert({ name: "Abnish" }, "name"));
// GENERIC CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
let printStorage = new DataStorage();
printStorage.addItem("max");
printStorage.addItem("min");
printStorage.removeItem('max');
console.log(printStorage.getData());
let numberStorage = new DataStorage();
numberStorage.addItem(12);
numberStorage.addItem(14);
console.log(numberStorage.getData());
function createCourseGoal(title, description, startingDate) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.startingDate = startingDate;
    return courseGoal;
}
// In the above example, Partial<> type allow you to do the object property is temporarialy available. It allow you to add the object element manually and whenever necessary. It make sure that all the property of the object is to be optional/ temp.
// READONLY TYPE
// If you want to lock sthing in an array and string or donot want to modify you can use Readonly feature in TS. 
const namess = ["Abnish", "Alok"];
// namess.push("Amit")
const num = [12, 45];
// num.push(16)
// GENRERIC AND UNION TYPES
// If you want to lock a certain type in an array of string or number of boolean, Gerneric type is the best. 
// If you have a function and want to call every time of a certain type. flexible and every method call
//Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data).
