//Here we will learn reduce


//Basic way to write reduce function
    // const myNums = [1, 2, 3, 4, 5, 6]

    // const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    //     return accumulator + currentvalue
    // }, 0) // comma ke baad jo bhi value hum denge wo value accumulator le lega  first time mein // but dusri baar mein accumultor mein wo jaayega jo return hoga
    // console.log(myTotal);


//another way to use reduce  that is by using arrow function
    // const myNums = [1, 2, 3]
    // const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator + currentvalue , 0)
    // console.log(myTotal)


//some more examples on this reduce
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science",
        price:12999
    },
]

const totalPrice = shoppingCart.reduce( (accumulator,item) => (accumulator + item.price) , 0)
console.log(totalPrice);