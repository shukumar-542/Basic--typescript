{
    // 
    type genericType<T> = Array<T>

    const rollNumber : genericType<number> = [1,2,3,4]

    const name : genericType<string> = ['sh','gh'];

    const booleanArr :  genericType<boolean> = [true, false,true];


    const user : genericType<{name : string, age :  number}> = [ 
        {
        name : 'shu', age: 23
        },
        {
            name : 'gh', age : 28
        }
]

    // 
}