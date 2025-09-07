"use strict";
// Learning function
// Normal function
// arrow function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(1, 1);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 2);
// object --> function --> method
const employee = {
    name: "shukumar",
    balance: 10,
    salary(balance) {
        return balance + this.balance;
    }
};
const arr = [1, 2, 4];
const newArr = arr.map((elem) => elem * elem);
