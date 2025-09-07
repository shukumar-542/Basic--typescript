"use strict";
{
    //
    // instance of guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am Make Sound');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBurk() {
            console.log('I am Burking');
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log('I am Mew Mew');
        }
    }
    // handle smart way using function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBurk();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('shepard', "dog");
    const cat = new Cat('cat bhai', 'cat');
    // dog.makeBurk()
    getAnimal(dog);
    // 
}
