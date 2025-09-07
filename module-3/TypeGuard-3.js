"use strict";
{
    const add = (parma1, param2) => {
        if (typeof parma1 === 'number' && typeof param2 === 'number') {
            return parma1 + param2;
        }
        else {
            return parma1.toString() + param2.toString();
        }
    };
    const result = add(1, '2');
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`${user.name} and ${user.role}`);
        }
        else {
            console.log(`${user.name}`);
        }
    };
    const user1 = {
        name: 'sh'
    };
    getUser(user1);
    //
}
