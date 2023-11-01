// Learning function
// Normal function
// arrow function

function add (num1 : number, num2 : number=10 ) : number{
    return num1 +  num2
}
add(1,1)

// arrow function
const addArrow = (num1 : number , num2 : number): number => num1 + num2;
addArrow(2,2) 


// object --> function --> method
const  employee = {
    name : "shukumar",
    balance :  10,
    salary(balance : number) :  number{
        return balance + this.balance
    }
} 

const arr :  number[] = [1,2,4];
const newArr : number[] = arr.map((elem : number) : number=> elem * elem)