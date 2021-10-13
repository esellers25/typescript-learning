enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Erin",
    age: 27, 
    hobbies: ['Cooking', 'Ceramics', 'Swimming'],
    role: Role.AUTHOR
}

console.log(person.name)