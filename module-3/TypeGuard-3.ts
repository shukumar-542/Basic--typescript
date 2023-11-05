{
    //
    // type gurad
    type alphaNumeric = string | number;
     const add =(parma1: alphaNumeric , param2 : alphaNumeric)=>{
        if(typeof parma1 === 'number' &&  typeof param2 === 'number'){
            return parma1 + param2;
        }else{
            return parma1.toString() + param2.toString()
        }
     }

     const result = add(1,'2');
    //  console.log(result);



    // In guard
    type normalUser = {
        name : string;
    }
    type AdminUser={
        name : string;
        role :  'admin';
    }

    const getUser =(user : normalUser | AdminUser)=>{
        if('role' in user){
            console.log(`${user.name} and ${user.role}`);
        }else{
            console.log(`${user.name}`);
        }
    }

    const user1 : normalUser = {
        name : 'sh'
    }
    
    getUser(user1)



    //
}