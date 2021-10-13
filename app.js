function combine(inp1, inp2) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
var combineAges = combine(27, 30);
console.log(combineAges);
var combinedNames = combine('Anna', 'Maria');
console.log(combinedNames);
var u1 = { name: 'Andrew', age: 30 };
console.log(u1.name);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    if (checkAge > user.age) {
        console.log('Too young');
    }
}
greet(u1);
isOlder(u1, 35);
