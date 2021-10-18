let userInput: unknown; 
let userName: string; 

userInput = 5; 
userInput = 'Erin'; 

if(typeof userInput === 'string'){
    userName = userInput;
}

// never example 
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}; 
}

generateError('Invalid code!', 500); 