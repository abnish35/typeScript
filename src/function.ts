
// Function as a call back

function combine(n1: number, n2: number, cb: (result: number)=> void){
    
    let result = n1+n2
    cb(result);
}

combine(4, 56, (result)=>{
    console.log(result)
})


// function add(n1: number, n2:number): undefined{
//     // console.log(n1+n2)
//     let result = n1+n2;
//     console.log(result)
//     return;
// }

// function printData(num: number): void{
//     console.log(num)
//     return;
// }

// console.log(printData(add(34, 56)))
// console.log(add(11, 3))

// if I put undefined insted of "void", then there must be one return type of the function