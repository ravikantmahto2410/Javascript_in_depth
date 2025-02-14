/*let score = "33"

    console.log(typeof score);
    console.log(typeof(score));

    let valueInNumber = Number(score)  //Now it is guaranteed that the score is converted from string to Number
    console.log(typeof valueInNumber);
*/

// Note: Don't rely on Number data type

//Notes:
//1.) Number is converted srom string "33" , it gets converted successfully
//2.)"33abs"  when coverting from this to number it gives NaN
//3.) true is convrted -> 1 , false is converted -> 0;

/*
    let isLoggedIn = 1
    let booleanIsLoggedIn = Boolean(isLoggedIn);
    console.log(booleanIsLoggedIn);
*/
//Notes:
// 1 => true;
// 0 => false;
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


//**************************Operations***************** */
/*
    let value = 3;
    let negValue = -value;
    console.log(negValue)
*/
/*
    let str1 = "hello"
    let str2 = "bandariya"

    let str3 = str1 + str2;
    console.log(str3);


    console.log("1" + 2);// if in first the string is present then the conversion is done on string
    console.log(1 + "2");
    console.log("1" + 2 + 2);
    console.log(1 + 2 + "2");//If first number are are there then conversion is done on number  // In javascript whenever these types of conversions are being done don't be dependent on the javascript conversion
*/
/*
console.log(true);
console.log(+true); // dont do these types of conversions
console.log(+""); // also dont do these types of conversions
*/

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);





