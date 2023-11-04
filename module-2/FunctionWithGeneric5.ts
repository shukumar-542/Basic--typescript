{
    // 

    // function with generic
    const createArray = (param : string) : string[] =>{
        return [param]
    }
    const createArrayWithGeneric = <T>  (param : T) : T[] =>{
        return [param]
    } 
    const res2 = createArrayWithGeneric<string>('developer')
    const res1 =  createArray('shukumar');

    const addCourse = <T>(student :  T)=>{
        const course = " Next Level Web Development ";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourse({
        name:  "shukumar", email : 'shukumar542@gmail.com'
    })

    // 

}