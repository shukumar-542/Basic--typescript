{
    // type alias

    type Student = {
         name : string,
        age : number,
        contactNo ? : string,
        address : string
    }

    const student1 : Student = {
        name : 'Shukunmar',
        age : 29,
        contactNo : "01872999023",
        address : 'Dhaka'
    }
    const student2 : Student = {
        name : 'Shukunmar',
        age : 29,
        address : 'Dhaka'
    }



    // function type alias
    type add =(num1 : number , num2 : number) => number
    const add : add= (num1 , num2 )=>{
        return num1 + num2
    }




    //
}