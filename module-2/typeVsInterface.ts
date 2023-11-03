{
    // 

    type user1 = {
        name :  string;
        age : number;
    }

    interface user2  {
        name :  string;
        age : number;
    }
    type userWithRole = user1 & {role  : string};
    interface userWithRole2   extends user2 {role :  string}
    const user1 : userWithRole2 = {
        name :  'shukumar',
        age : 100,
        role  :  'developer',
    }


    type roll1 =  number[]; 

    interface roll2 {
        [index : number]  : number;
    }
    const roll :  roll2 = [1,2,3]


    // 

}