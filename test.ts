// Union Type

// const input1 = 3;
// const input2 = 5;
// Alias
// 
type combinator= number | string;

function add(input1: combinator, input2: combinator){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number"){
        result = input1+input2 
    }
    else{
        result = input1.toString() + input2.toString()
    }
    return result;

}

console.log(add(45, 23))
console.log(add("max", "well"))