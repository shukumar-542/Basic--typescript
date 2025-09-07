"use strict";
{
    //
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHour) {
            console.log(`Name : ${this.name} age : ${this.age} address : ${this.address} and 
            daily sleep ${numOfHour}
            `);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
        TakenClass(noOfClass) {
            console.log(`${this.name} and Total Class ${noOfClass}`);
        }
    }
    const student1 = new Student('shukumar', '28', "Dhaka");
    student1.getSleep(10);
    const Teacher1 = new Teacher('sh', '40', 'dhaka');
    Teacher1.TakenClass(10);
    // 
}
