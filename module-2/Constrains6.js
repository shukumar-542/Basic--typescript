"use strict";
{
    // 
    const addCourse = (student) => {
        const course = " Next Level Web Development ";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 222, name: "shukumar", email: 'shukumar542@gmail.com'
    });
    // 
}
