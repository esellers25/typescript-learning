function add(n1: number, n2: number) {
    return n1 + n2; 
}

// below is the syntax for explicitly stating a return value in TS
// not often neeeded as TS can infer 
function printResult(num: number): void{
    console.log('Result: ' + num);
}

printResult(add(5,12)); 

// below specifics that this variable should return type of function, and more specifically, 
//a function that accepts two parameters, both numbers, and returns a number 
let combineValues: (a: number, b: number) => number; 

//valid
combineValues = add; 
//not valid 
// combineValues = printResult; 

console.log(combineValues(8,8));