"use strict";
{
    // 
    // function with generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res2 = createArrayWithGeneric('developer');
    const res1 = createArray('shukumar');
    const addCourse = (student) => {
        const course = " Next Level Web Development ";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        name: "shukumar", email: 'shukumar542@gmail.com'
    });
    // 
}
