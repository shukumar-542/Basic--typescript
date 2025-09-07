{// spread operator
// rest operator

// Learn spread operator
const playes1 : string[] = ["AB", 'Virat', 'MSD'];
const playes2 : string[] =["Jasprit", "Breet", "Bolt"]

playes1.push(...playes2)


// rest operator



const friends = (...friends :  string[])=>{
    friends.forEach(element => {
        console.log(element)
    });
}

friends('max' , 'jhon' , "smith")

}

