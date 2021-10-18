var userInput;
var userName;
userInput = 5;
userInput = 'Erin';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Invalid code!', 500);
