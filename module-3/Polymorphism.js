"use strict";
{
    // 
    class Person {
        getSleep() {
            console.log('I am sleeping for 8 hours per day');
        }
    }
    class Student extends Person {
        getSleep() {
            console.log('Student Sleeping 10 hours per day');
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log('Developer Sleeping 10 hours per day');
        }
    }
    const getSleepHours = (param) => {
        param.getSleep();
    };
    const student = new Student();
    const developer = new Developer();
    getSleepHours(student);
    getSleepHours(developer);
    // 
}
