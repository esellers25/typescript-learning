// type Alias using a union type 
type Combineable = number | string;

function combine(inp1: Combineable, inp2: Combineable){
    let result; 
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    } else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}

const combineAges = combine(27, 30);
console.log(combineAges);

const combinedNames = combine('Anna', 'Maria')
console.log(combinedNames);

// more with Type Alias 

type User = {name: string; age: number};
const u1: User = {name: 'Andrew', age: 30};
console.log(u1.name)

function greet(user: User){
    console.log('Hi, I am ' + user.name)
}

function isOlder(user: User, checkAge: number){
    if(checkAge > user.age) {
        console.log('Too young');
    } 
}

greet(u1); 
isOlder(u1, 35);