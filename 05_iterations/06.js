// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
// })


//Its very interesting to see what values does this forEach returns
    // const values = coding.forEach( (item) => {
    //     console.log(item);
    // })
    // console.log(values)


    // const values = coding.forEach( (item) => { 
    //     console.log(item);
    //     return item; //if we want to return something in this way , we have to return manually
    // })
    // console.log(values)
    //if we want to return something in this way , we have to return manually, but then also it's not returning anything , Hence we can say that the forEach Doesn't return anything





// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Note filter returns some values
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

//some more ways of writing
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { //Note whenever we use {} braces  humlog ko return keyword likhna hi padega
//     return num > 4
// })
// console.log(newNums);




//if we want to do the same work as above filter is doing but we don't want to use filter , instead we want to use forEach
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);







//we can do something more for filter
// const books = [
//     {title: 'Book One' , genre: 'Fiction', publish:1981, edition: 2004},
//     {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
//     {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
//     {title: 'Book Four' , genre: 'Non-Fiction', publish: 1989, edition:2010 },
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish:2011, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks)


//More Practise
// const books = [
//     {title: 'Book One' , genre: 'Fiction', publish:1981, edition: 2004},
//     {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
//     {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
//     {title: 'Book Four' , genre: 'Non-Fiction', publish: 1989, edition:2010 },
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish:2011, edition: 1989},
// ];
// const userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000
// })
// console.log(userBooks)


//Example-03
// const books = [
//     {title: 'Book One' , genre: 'Fiction', publish:1981, edition: 2004},
//     {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
//     {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
//     {title: 'Book Four' , genre: 'Non-Fiction', publish: 1989, edition:2010 },
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish:2011, edition: 1989},
// ];
// const userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000 && bk.genre === "Science"
// })
// console.log(userBooks)

//Example -04
const books = [
    {title: 'Book One' , genre: 'Fiction', publish:1981, edition: 2004},
    {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
    {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
    {title: 'Book Four' , genre: 'Non-Fiction', publish: 1989, edition:2010 },
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish:2011, edition: 1989},
];
const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks)

