// #ECMAScript2015 #ECMAScript6 #ES6 #2015 #класс #class

// JS построен на прототипах, поэтому класс в JS - это синтаксический сахар, класс не добавляет новых структур данных в язык.
/*
почему prototype хуже class?
1. показывает детали формирования связей между объектами, а не смысл
2. наследование и управление цепочками - громоздкий код
*/

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

let dog = new Animal('dog', 'woof');
dog.say();

//создаём цепочку прототипов:
//duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null

class Bird extends Animal {

}

const duck = new Bird('duck', 'quack');
duck.say();


//если какой-либо класс, наследующий свойства от родителя, имеет constructor, то в этом классе наследование свойств нужно указывать явно:
//при помощи super()

class People {
    constructor(name, age) {
     this.name = name;
     this.age = age;
    }
    say () {
        console.log(`Меня зовут ${this.name} и мне ${this.age}`);
    }
}

class Girl extends People {
    constructor(name, age, hair) {
        super(name, age);
        this.hair = hair;
        super.say(); //обращение к родительскому методу
    }
    //переопределяем родительский метод say (меняется у дочернего, но не меняется у родителя)
        say () {
          console.log(`Я переопределённые метод у Girl`);
        }
}
let Veronika = new Girl('Veronika', 24, 'brown');
let people = new People("Igor", 26);
Veronika.say();
people.say();


//super даёт доступ не только к конструктору наследуемого объекта, но и ко всем его методам
