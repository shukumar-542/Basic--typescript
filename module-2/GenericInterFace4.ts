{
    // 

    type Developer<T,B = null> ={
        name :  string;
        computer : {

            brand : string;
            model :  string
        };
        smartWatch  : T;
        bike? : B

    }

    type dev1 = {
        brand : string,
        model : string
    }
    interface dev2  {
        brand : string,
        model : string,
        nothing : number,
    }
    const poorDeveloper : Developer<dev1 > ={
        name : 'shukumar',
        computer : {
            brand  : 'asus',
            model  : "n4"
        },
        smartWatch : {
            brand : "xiaomi",
            model : 'imilab'
        }
    }
    const Developer2 : Developer<dev2 , {name:  string}> ={
        name : 'shukumar',
        computer : {
            brand  : 'asus',
            model  : "n4"
        },
        smartWatch : {
            brand : "xiaomi",
            model : 'imilab',
            nothing  : 123
        },
        bike  : {
            name  : "yamaha",

        }
    }





    // 
}