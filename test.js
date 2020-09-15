var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
});
// var num1: number = 12
// var num2: number = 4
// var res: boolean = num1>num2 && num2>num1 ;
// console.log("sum is", num1 + num2)
// console.log("difference is", num1 - num2)
// console.log('true or false', res)
