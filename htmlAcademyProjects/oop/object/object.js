let name = "Wafafw"

class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    walk() {
        console.log(this.name + " go for a walk");
    }

    isAdult() {
        return this.age > 18;
    }

    static display() {
        return console.log("User class");
    }
}

// let igor = new User("Igor", "Loshachenko", 26);
// let veronika = new User("Veronika", "Matsko", 23);
// let user3 = new User("User3", "Userovich3", 13);

let users = []

for (let i = 1; i < 10; i++) {
    users.push(new User("User" + i, "Userovich" + i, Math.floor(Math.random() * 10 * 5)));
}
//
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isAdult()) {
//         console.log(users[i].name + " is adult");
//     }
// }

console.log(users);

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdult()) {
        users[i].walk();
    }
}