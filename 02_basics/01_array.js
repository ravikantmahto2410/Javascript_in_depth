//array
const myArr = [0, 1, 2, 3, 4, 5,] //Note elements can be of different type

//Interview Question: whenever we apply copy operation on array . What type of copy it makes
// Answ : It makes Shallow Copy
//Shallow copy : A shallow copy of an object is a copy whose properties share the same references as those of the source object


// other ways of declaring Array
const myHeros = ["papa", "Mummy", "Brother"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array Methods
//01 push
// myArr.push(9);
// myArr.push(101);
// myArr.pop();
// myArr.unshift(6);
// myArr.shift(6);
// console.log(myArr);

//Some more Operations
// console.log(myArr.includes(9)); // to check whether 9 is included here or not
// console.log(myArr.indexOf(7));

// const newArr = myArr.join() // join adds all the elements of an array into a string, separated by the specfied separator
// console.log(myArr);
// console.log(newArr);



// slice , splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3);
console.log("C", myArr)
console.log(myn2);

//Interview Question : What is the difference between slice and splice
