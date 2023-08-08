// JavaScript Promise and Promise Chaining

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected
 

// Create Promise

{
    const promise =new Promise(function(resolve,reject)
    {
        //Do Something
    });
}


// Program

{
    // const num =1;

    // let num1 =new Promise(function(resolve,reject)
    // {
    //     if(num===1)
    //     {
    //         resolve("This Is True");
    //     }
        
    //     else
    //     {
    //         reject("This Is False");
    //     }
    // });

    // console.log(num1);
}

// The syntax of then() method is

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then() 

{
    let num= new Promise(function(resolve,reject)
    {
        resolve("Promise Resolved")
    });

    num

    .then(function val(result)
    {
        console.log(result);
    })

    .then(function val1() 
    {
       console.log("You can call multiple functions this way.");
    });
}