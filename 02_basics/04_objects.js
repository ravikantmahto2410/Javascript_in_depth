const tinderUser = new Object() // Way of declaring a object it will give output as {} on console.log(tinderUser) // this is singleton Object
const tinderUser2 = {} // this is also an way of declaring a object it will also give {} as output when doing conmsole.log // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;

console.log(tinderUser);



//Object ke ander object
const regularUser = {
    email:"someUser@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname)
//optional chaining , it means suppose fullname doesn't exist then there will be problem  so we use just below line type syntax
console.log(regularUser.fullname?.userfullname) // the ? is here just checking whether fullname is available or not





//combining objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "c", 6: "d"}
// const obj3 = {obj1,obj2} //this is problamatic 
// console.log(obj3)

// const obj4 = Object.assign({}, obj1, obj2,obj3) // this is better way of merging the two objects //giving {} is a good way to merge two objects suppose ho sakta hai ki hamare paas aur bhi value ho  the {} will act as target  and rest are source refer mdn
// console.log(obj4)


//most of the time we will use this to merge object or assign
const obj5 = {...obj1, ...obj2}
console.log(obj5);




// we will also use most of the time, suppose hamre paas database value aayi and 
////the data from database comes in this way
const users = [ // users  came in array of objects
    {
        id: 1,
        email : "user1@gmail.com"
    },
    {
        id: 2,
        email : "user2@gmail.com"
    },
    {
        id: 3,
        email : "use3r@gmail.com"
    },
    {
        id: 4,
        email : "user4@gmail.com"
    }
]

users[1].email



// some more interesting detail about tinderuser
console.log(tinderUser)
//sometimes we need these methods
console.log(Object.keys(tinderUser)); //when we Object.keys() then it does not know that  in ehich Object you want to apply this method,through this  this line keys we took keys and stored in a array , now we can loop through these keys
console.log(Object.values(tinderUser)) // on doing console.log this will also return values in array
//another interesting method
console.log(Object.entries(tinderUser));



// sometimes we are looping through the entire objects and taking out one value, sometimes while taking the values the values doesn't exist then it that case chances are the code will crash so to prevent that we can either manually or we can alse ask whether you have values or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





// Destructring objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}
// now how you will use these values
// One way can be using dot notation and square notation and there is nothing wrong in doing this way
// console.log(course.courseInstructor)


// second way , but sometimes to reduce the lines of code and make clean code we can use this second way
// second way is just syntaxical sugar
//Syntax : const {which_value_you_want_to_extract} = kahan _se_value_extract_karni_hai 
// const {courseInstructor} = course
// after this point whenever we want this value we dont have to write again course.instructor
// console.log(courseInstructor)  

// suppose the name of the courseInstructor is long then we can also give name by our own
const {courseInstructor: instructor} = course
console.log(instructor);




//In react there are some methods
// const navbar = (props.company) => {

// }
// navbar(company = "hitesh")

//instead of writing 118-121: we write
const navbar = ({company}) => {

}
navbar(company = "hitesh")




// Concept of API
// suppose this is json
// {
//     "name": "Hritika",
//     "coursename": "Javascript",
//     "price": "free",

// }


// what happpens when json se jab api call hoti hai to hota kya hai milta kaisa hai

//sometimeswe get API in form of arrays
// [
//     {},
//     {},
//     {},
// ]


//lets discuss One famous API Random me user API 
