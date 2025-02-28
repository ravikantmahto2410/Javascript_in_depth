//Very Interesting loops
//for each

// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function  (item) { // item ke jagah mein jo naam dena ho de do koi fark nhi padta , and remember ine thing that callback function don't have name
//     console.log(item);
// })

//one for way of writing function here
    // const coding = ["js", "ruby", "java", "python", "cpp"]
    // coding.forEach( (val) => {
    //     console.log(val);
    // })


//aur interesting
// const coding = ["js", "ruby", "java", "python", "cpp"]
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);



//something more
    // const coding = ["js", "ruby", "java", "python", "cpp"]
    // coding.forEach( (val,index,arr) => {
    //     console.log(val,index,arr);
    // })





//objects inside array [{}, {}, {}]
//this scenario is used very commonly with for each loop
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js",
    },
    {
        languageName : "Java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    }
]

myCoding.forEach((item) => {
    console.log(item)
})

