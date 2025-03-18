// how to make promises

//Promise 1

// const promiseOne = new Promise()  // promise aapka ban gaya


     //example one
    //     const promiseOne = new Promise(function(resolve,reject) {
    //         //Do a async task
        
    //         //1.)DB Calls , cryptography, network calls
        
    //         setTimeout(function () {
    //             console.log('Async task is complete');
    //         }, 1000)
    //     })

    // //since the promise is created , we have to consume this
    // //how to consume

    // promiseOne.then(function(){
    //     console.log("Promise consumed");
    // })


    //To connect resolve and .then , we have to call a method called resolve
    // const promiseOne = new Promise(function(resolve,reject) {
    //     //Do a async task
    
    //     //1.)DB Calls , cryptography, network calls
    
    //     setTimeout(function () {
    //         console.log('Async task is complete');
    //         resolve()
    //     }, 1000)

    // })

    // promiseOne.then(function(){
    //     console.log("Promise consumed");
    // })



//promise 2
    // new Promise(function (resolve, reject) {
    //     setTimeout(function(){
    //         console.log("Async task 2");
    //         resolve()
    //     },1000)
    // }).then(function(){
    //     console.log("Async 2 resolved");
    // })




//Promise 3
    // const promiseThree = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         resolve({username: "Chai", email: "chai@example.com"})
    //     }, 1000)
    // })

    // promiseThree.then(function(user){
    //     console.log(user)
    // })



//Promise 4
    //Example -01
    // const promiseFour = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         let error = true;
    //         if(!error) {
    //             resolve({username: "hitesh", password: "123"})
    //         } else {
    //             reject('ERROR: Something went wrong')
    //         }
    //     }, 1000)
    // })

    // promiseFour.then().catch()  // value will be taken using .then() ,  and if any error comes then it will be handled by .catch()

    //Example-02 one step ahead
        // const promiseFour = new Promise(function(resolve, reject) {
        //     setTimeout(function() {
        //         let error = false;
        //         if(!error) {
        //             resolve({username: "hitesh", password: "123"})
        //         } else {
        //             reject('ERROR: Something went wrong')
        //         }
        //     }, 1000)
        // })

        // promiseFour.then((user) => {
        //     console.log(user);
        //     return user.username
        // })
        // .then((username) => {
        //     console.log(username);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })
        // .finally(() => console.log("The Promise is either resolved or rejected"))//this will be executed almost evrytime , its kind of default


//Promise 5

    const promiseFive = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = true
            if(!error) {
                resolve({username: "Javascript", password: "123"})
            }
            else {
                reject('ERROR: JS Went Wrong')
            }
        },1000)
    });

    //async wait : async await is like .then() and .catch()  type , it waits for sometime for somework to finish else it gives error there itself

    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    consumePromiseFive()


    //something more

    // async function getAllUsers(){
    //     try {
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    //         const data  = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log("E : ", error);
    //     }
    // }
    // getAllUsers()


    //by using .then  and .catch

    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

    //Interview question: 
    //suppose you have requested using promise and one 404 error came, then where will you find this either in resolve or in reject
    // ans: that we will always get using a response, that is not the error , error only comes only when, browser didn't able to request 



