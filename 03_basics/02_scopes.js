// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);


//problem
    var c = 300;
    if (true){ // the values written inside this is called local scope and outside it is global scope
        let a = 10;
        const b = 20
        var c = 30;
    }
    // console.log(a);
    // console.log(b);
    console.log(c);// ye c print nhi honi chahiye thi  c bahar nhi aana chahiye tha

// let ki kahani 
    // let a = 300;
    // if(true){
    //     let a = 10;
    //     const b = 20
    //     console.log("INNER :" ,a);
    // }
    // console.log(a);


// scopes in windows
//Interview Question : the scopes in browser console option and the scope in code environment if we run example through node environment then scope will be different
    

//********************************Scope level and Mini Hoisting in javascript************ */
// function one(){
//     const username = "Safari"

//     function two(){
//         const website = "youtube"
//         console.log(username);

//     }
//     // console.log(website);
//     two()
// }

// one()


// the above works also happens inif else

// if(true){
//     const username = "Altroz"
//     if(username === "Altroz") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website) this will generate error so commented
// }
// console.log(username); // this will also generate error so commented



//***********+++++++++++++++Interesting Concept *****************++++++++++++ */

// function addone(num){ // this is basic function 
//     return num + 1;
// }
// addone(5);

// const addTwo = function(num){ // isko kabhi kabhi expression bhi bol diya jaata hai , this is like variables in javscript variables is very powerful it can hold anything , can hold JSON, functions etc
//     return num + 2;
// }
// addTwo(5);

// now comes the intersting part 
//the below line codes runs fines 
// addone(5); //function calling this way is accepted
// function addone(num){ // this is basic function 
//     return num + 1;
// }
// addTwo(5); // this will generate error because  addTwo is unaccessible ,this problem is arising beacuse we hold that function along with declaration ,,,this is better understand at hoisting concept
// const addTwo = function(num){ // isko kabhi kabhi expression bhi bol diya jaata hai , this is like variables in javscript variables is very powerful it can hold anything , can hold JSON, functions etc
//     return num + 2;
// }



