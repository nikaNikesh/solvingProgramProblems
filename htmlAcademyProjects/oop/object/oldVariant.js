
let constructor = function (name, lastName, age) {
    return {
        'name': name,
        'lastName': lastName,
        'age': age
    };
}

let igor = user("Igor", "Loshachenko", 26);
let veronika = user("Veronika", "Matsko", 23);

console.log(igor);
console.log(veronika);