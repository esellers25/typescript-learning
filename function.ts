function add(n1: number, n2: number) {
    return n1 + n2; 
}

// below is the syntax for explicitly stating a return value in TS
// not often neeeded as TS can infer 
function printResult(num: number): void{
    console.log('Result: ' + num);
}

// here, we pass in a callback function as the third parameter. 
// by explicitly listing void as the return value, we are indicating that we will not be doing anything 
// with the return value of the function. It does NOT force you to pass in a callback with no return value 
 
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result); 
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

addAndHandle(10, 20, (result) => {console.log(result);})