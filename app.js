var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Erin",
    age: 27,
    hobbies: ['Cooking', 'Ceramics', 'Swimming'],
    role: Role.AUTHOR
};
console.log(person.name);
