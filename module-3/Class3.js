"use strict";
{
    // 
    class Animal {
        // name :  string;
        // species :  string;
        // sound : string;
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name =  name;
            // this.species = species;
            // this.sound =  sound;
        }
        makeSound() {
            console.log(`This is ${this.name}  and species is ${this.species}  and sound  ${this.sound}`);
        }
    }
    const dog = new Animal('German sefard', 'dog', 'Ghew Ghew');
    dog.makeSound();
    // 
}
