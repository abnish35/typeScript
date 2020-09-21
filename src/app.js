// INtersection type
// Type Guard =>  it is an idea of checking if a certain property or method  exists before you try to use it. You can use it by checking with "typeof" or "in" or "insteadof" from javascript syntax of accessing the objects. 
// Descriminated Union :-> 
// NUllish Coalishing 
var userInput = undefined;
var storedData = userInput ?  ? "DEFAULT" :  : ;
console.log("stored data is ", storedData);
console.log("loading");
// interface Bird{
//     type: "bird";
//     flyingSpeed: number;
// }
// interface Horse{
//     type: "horse";
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed= animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed= animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at a speed of  ', speed)
// }
// moveAnimal({type: 'horse', runningSpeed: 1000})
// type Admin={
//     name: string;
//     priviledge: string[];
// };
// type employee={
//     name: string;
//     startDate: Date;
//  }
// type combined = string | number;
// type numbered = number | boolean;
// type commonEmployee = combined & numbered; 
// function addNum(a: combined, b: combined){
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString()
//     }
//     return a+b; 
// }
// type unknownEmp = Admin | employee;
// function printEmployee( emp: unknownEmp ){
//     if("priviledge" in emp){
//         console.log(emp.priviledge)
//     }
//     if("startDate" in emp){
//         console.log("start Date is : ", emp.startDate)
//     }
// }
// printEmployee({name: "Abnish_KUmar", startDate: new Date()})
// // printEmployee(em);
// // Third way
// class Car {
//     drive(){
//         console.log("driving the car")
//     }
// }
// class Truck{
//     drive(){
//         console.log("driving the Truck")
//     }
//  loadCargo(cost: number){
//     console.log("loding Carge", cost)
// }
// }
// type vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function printVehicle(vehicle: vehicle){
//     vehicle.drive()
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000)
//     }
// }   
// printVehicle(v1);
// printVehicle(v2)
//  type commonEmployee = Admin & employee;
//  let newEmp : commonEmployee={
//      name: "Abnish",
//      priviledge: ["coding", "editing"],
//      startDate: new Date()
//  }
//  console.log(newEmp)
