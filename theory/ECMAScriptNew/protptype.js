
//до прототипов:
/*const dog = {
    name: 'dog',
    voice: 'woof',
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

const cat = {
    name: 'cat',
    voice: 'meow',
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};*/

// #ECMAScript2015 #ECMAScript6 #ES6 #2015 #Object.setPrototypeOf() #objectPrototype #прототипОбъекта
//с прототипом с помощью метода Object.setPrototypeOf() !!!очень замедляет работы! Не рекомендуется использовать!
/*
const animalVoice = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'woof',
};
Object.setPrototypeOf(dog, animalVoice);

const cat = {
    name: 'cat',
    voice: 'meow',
};
Object.setPrototypeOf(cat, animalVoice);
*/

//сразу явно указывать прототип
const animalVoice = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};


//с иcпользованием Object.create
/*
function createAnimal(name, voice) {
    const animal = Object.create(animalVoice);
    animal.name = name;
    animal.voice = voice;
    return animal;
}

const dog = createAnimal('dog', 'woof');
const cat = createAnimal('cat', 'meow');

dog.say();
cat.say();
*/

//с иcпользованием new

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function() {
    console.log (this.name, 'goes', this.voice);
};
const dog = new Animal('dog', 'woof');
const cat = new Animal('cat', 'meow');

dog.say();
cat.say();

// #объектбезпрототипа #objectwithoutprototype
//создание объекта без прототипа

const obj = Object.create(null);
