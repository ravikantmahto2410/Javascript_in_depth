//Object Literal : Object literal are object swhich consist of properties and methods
    // const user = {
    //     username : "hitesh",
    //     loginCount: 8,
    //     signedIn: true,


    // }
    // console.log(user.username)

    //Example -02 Object literal has properites
    // const user = {
        //  username : "hitesh",
        //  loginCount: 8,
        //  signedIn: true,
               
        //     getUserDetails: function(){
        //         console.log("Got user details from database");
        //     }
    
        // // }
        // console.log(user.getUserDetails())





//Constructor Function : This function allows to create multiple instances using the same object literal
    // const promiseOne = new Promise()  //this new keyword is a constructor function
    // const date = new Date()



    // function User(username, loginCount, isLoggedIn){
    //     this.username = username;
    //     this.logincount = logincount;
    //     this.isLoggedIn = isLoggedIn;

    //     return this
    // }

    // const userOne = User("Hitesh", 12, true);
    // console.log(userOne);



    // function User(username, loginCount, isLoggedIn){
    //     this.username = username;
    //     this.logincount = this.logincount;
    //     this.isLoggedIn = isLoggedIn;

    //     return this
    // }

    // const userOne = new User("Hitesh", 12, true);
    // const userTwo = new User("Chai Aur Code", 11, false)
    // console.log(userOne);

    //Notes :
        // step - 1.) when we use 'new' keyword then an empty object is created that is known as object.
        // step - 2.) a constructor function is called using this new keyword
        // step-03.) whatever arguments is written is injected in that constructor function
        // step- 04.) we get all these arguments inside the function


        function User(username, loginCount, isLoggedIn){
            this.username = username;
            this.logincount = this.logincount;
            this.isLoggedIn = isLoggedIn;

            this.greeting = function() {
                console.log(`Welcome ${this.username}`)
            }
            return this
        }

            const userThree = new User("Bandariya", 12, true);
            const userFour = new User("Lenovo", 11, false)
            console.log(userThree.constructor);
