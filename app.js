function add(n1, n2) {
    return n1 + n2;
}
// below is the syntax for explicitly stating a return value in TS
// not often neeeded as TS can infer 
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
// below specifics that this variable should return type of function, and more specifically, 
//a function that accepts two parameters, both numbers, and returns a number 
var combineValues;
//valid
combineValues = add;
//not valid 
// combineValues = printResult; 
console.log(combineValues(8, 8));
