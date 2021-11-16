let user = {
    name: "John",
    surname: "Smith"
}

console.log(user.name)
user.name = "Pete";
delete user.surname;
console.log(user.name)
console.log(user.surname)