//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//Intervew Question : What is the type of the Date
                      //Ans: object

//to ecalare new specific date

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // used when we create quizzes polls like all
console.log(myTimeStamp);

//to convert date in seconds
console.log(Math.floor(Date.now()/1000)) // Famous Interview question

//some more methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); //answer is 2 because day starts from Monday


//some more format customised
newDate.toLocaleString('default', {
    weekday: "long"
})