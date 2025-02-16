//lect-08/51
/*
    console.log(2 > 1);
    console.log(2 >= 1);
    console.log(2 < 1);
    console.log(2 == 1);
    console.log(2 != 1);
*/
/*
    // confusing comparisons
    console.log("2" > 1);
    console.log("02" > 1);
    //when these types of conversions takes place then sometime the comparisons does not give predictable result;
    // so Whenever we are doing comparisons , make sure the both have the same data type

    //examples of getting unpredictable comparison result
    console.log(null > 0);
    console.log(null == 0);
    console.log(null >= 0);

    //The reason is that  an equality check == and comparisons > ,<, >=, <= work differently
    //comparisons convert nulll to a number ,treating it as 0
    //That's why (3) null >= 0 is true and (1) null > 0 is false
*/


//Strict Check (===)
//definition : It not only checks your values but it also checks its data types
//example
console.log("2" === 2);
