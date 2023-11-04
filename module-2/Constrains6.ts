{
    // 

    const addCourse = <T extends { id: number , name: string , email : string}>(student :  T)=>{
        const course = " Next Level Web Development ";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourse({
       id : 222, name:  "shukumar", email : 'shukumar542@gmail.com'
    })


    // 
}