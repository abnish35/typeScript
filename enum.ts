// const person:{
//     name: string;
//     age: number;
//     hobby: string[];
//     role: [number, string]
// } ={
//     name: "Abnish",
//     age: 25,
//     hobby: ["sports", "coding", "Music"],
//     role: [2, "admin"]
// }

enum Role { ADMIN, USER, DEVELOPER }

const person={
    name: "Abnish",
    age: 24,
    hobby: ["sports", "coding"],
    role: Role.ADMIN
}



// person.role.push("user")
// person.role[0] = 10

for(let hobby of person.hobby){
    console.log("hobby", hobby)
   
}
console.log(person.role)
console.log(person.name)
if(person.role === Role.USER){
    console.log("IS ADMIN")
    
}