//How to use loops in object
    // const myObject = {
    //     js : 'javascript',
    //     cpp : 'C++',
    //     rb : 'ruby',
    //     swift : 'swift by apple'
    // }
    // // for(const key in myObject){
    // //     console.log(key);
    // // }

    // //object nikalana hai
    // for(const key in myObject){
    //     console.log(`${key} extension is for ${myObject[key]}`);
    // }



//Can we use for in array
    // const programming = ["js", "rb", "py", "java", "cpp"]

    // // for(const key in programming) {
    // //     console.log(key);
    // // }
    // // key se value nikalo
    // for(const key in programming){
    //     console.log(programming[key]);
    // }


//using for in map
    const map = new Map() // Map apne aap mein ek Object hai
    map.set('IN', "India")
    map.set('USA', "United States of America")
    map.set('Fr', "France")

    for(const key in map){
        console.log(key);
    }



//Interesting loops