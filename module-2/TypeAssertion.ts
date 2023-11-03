{
    //
    // type assertion

    let anything  :any;
    anything = 'Next Level developer';

    

    // ( anything as string).

    const KgToGram = (value :  string | number )  :  string | number | undefined=>{
        if(value === "string"){
            const convertNumber  = parseInt(value)* 1000;
            return `Kg to gram ${convertNumber}`
        }
        else if (typeof value === 'number'){
            return (value * 1000);
        }
        else{
            return undefined;
        }
    }

    const result = KgToGram(10) as number;

    // custom error
    type customError = {
        message  : string
    }

    try{

    }catch(error){
        console.log((error as customError).message);
    }

    //
}