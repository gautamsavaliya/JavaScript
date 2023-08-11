// Javascript Function apply()

// apply() Syntax

{
    // func.apply(thisArg, argsArray)
}

// thisArg - The value of this which is provided while calling func.

// argsArray (optional) - An array containing the arguments to the function.

// 1: apply() Method to call a Function

{
    // // object definition
    // const personName = {
    //     firstName: "Taylor",
    //     lastName: "Jackson",
    // };
    
    // // function definition
    // function greet(wish, message) {
    //     return `${this.firstName}, ${wish}. ${message}`;
    // }
    
    // // calling greet() function by passing two arguments
    // let result = greet.apply(personName, ["Good morning", "How are you?"]);
    
    // console.log(result);
}

// 2: apply() for Function Borrowing

{
    // // object definition
    // const car = {
    //     name: "BMW",
    //     description() {
    //     return `The ${this.name} is of ${this.color} color.`;
    //     },
    // };
    
    // // object definition
    // const bike = {
    //     name: "Duke",
    //     color: "black",
    // };
    
    // // bike is borrowing description() method from car using apply() 

    // let result = car.description.apply(bike);
    
    // console.log(result);
}

// 3: apply() to Append two Arrays

{
    // let color1 = ["Red", "Green", "Blue"];
    // let color2 = ["Yellow", "Black"];

    // // appending two arrays color1 and color2
    // let x = color1.push.apply(color1, color2);

    // console.log(color1);
}

// 4 : Using apply() with built-in functions

{
    // const numbers = [5, 1, 4, 3, 4, 6, 8 , 10];

    // // using apply() with Math object 
    
    // let max = Math.max.apply(null, numbers);

    // console.log(max); 

    // // without using apply() with Math object 

    // let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);

    // console.log(max1); 

    // // The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values.
}

{
    // function sum(){
    //     let  sum = 0;
    //     for(let i = 0 ; i < arguments.length; i++){
    //         sum += arguments[i];
    //     }

    //     return sum;
    // }

    // const  result = sum.apply(null , [2,2,2]);

    // console.log(result);
}

// JavaScript Function bind()

// The bind() method allows an object to borrow a method from another object without copying.

{
    // // object definition
    // const student1 = {
    //     name: "Jack",
    //     grade: "5",
    //     introduction: function () {
    //     console.log(this.name + "studies in grade" + this.grade + ".");
    //     },
    // };
    
    // // object definition
    // const student2 = {
    //     name: "Jimmy ",
    //     grade: " 6",
    // };
    
    // // the object student2 is borrowing introduction method from student1
    // let result= student1.introduction.bind(student2);
    
    // // invoking introduction() function
    // result();
}

// Using bind() Method with two Parameters

{
    // // object definition
    // const student1 = {
    //     name: "Jack",
    //     introduction: function (score) {
    //     console.log(this.name + "scored " + score + " in an exam.");
    //     },
    // };
    
    // // object definition
    // const student2 = {
    //     name: "Jimmy ",
    // };
    
    // // passing two parameters student2 and '95'
    // let result = student1.introduction.bind(student2, 95);
    
    // // invoking result() function
    // result(); 
}


