// destructuring

/**
 * 
 * Object destricturing 
 * Array destructuring
 */


{

    const user = {
        name : {
            firstName : "Shukumar",
            lastName : "Ghosh"
        },
        contact : "01872999038",
        address : 'Jhenaidah'

    }

    const {  contact : phoneNumber , name : { firstName : name }  }  = user;



    const palyesr = ["Jhon rocks", "Daud", "Smith"]

    const [,bestPlayer , ...rest] = palyesr



}
