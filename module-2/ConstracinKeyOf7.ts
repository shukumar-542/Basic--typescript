{
    //
    // generic key of operator

    type vehicle ={
        bike : string;
        car :  string;
        ship :  string
    }

    type Owner =  'car' | 'bike' | 'ship';

    type Owner2 = keyof vehicle;

    // const Person1  :  Owner2 = ""

    const getPropertyValue = <x , y extends keyof x>(obj  :  x , key : y)=>{
        return obj[key]
    }

    const user = {
        name : 'shukumar',
        age : 28
    }
    getPropertyValue(user , 'name')



    //
}