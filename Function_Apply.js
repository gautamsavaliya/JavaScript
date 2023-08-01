
// apply() Syntex

// {
//     fun.apply(thisarg,argsArray)
// }

// thisArg - The value of this which is provided while calling func.

// argsArray (optional) - An array containing the arguments to the function.


// 1 :Apply() Method To call a Function 

{
    // const abc={
    // Insititute :"SkillQode",
    // Location :'Surat'
    // };

    // function xyz(conrse,fees)
    // {
    //     return `${this.Insititute},Course Offer ${conrse} Fess Is ${fees}`;
    // }

    // let rs=xyz.apply(abc,["Full Stack","100,000"]);

    // console.log(rs);
}

// 2.Apply() For Function Borrowing

{
    // const abc={
    //     Name:"Rahul",
    //     address()
    //     {
    //         return `${this.Name} Location Is ${this.Location}`;
    //     }
    // };

    // const xyz={
    //     Name:"Ramesh",
    //     Location:"Surat",
    //     Age:15
    // };

    // let rs= abc.address.apply(xyz);

    // console.log(rs);
}

// 3.Apply() To Append Two Array

{
    // const arra1=["Banana","Apple","Mango"];
    // const arr2=["Kiwi","Cherry"];

    // const xuz=arra1.push.apply(arra1,arr2);

    // console.log(xuz);
    // console.log(arra1);
}

// 4 : Using apply() with built-in functions

{
    // const Number=[12,3,56,8,9,52,4,6,2,6,86,1];

    // let max=Math.max.apply(null,Number);

    // console.log(max);

    // Apply() with Math object

    // let maxi=Math.max(5,6,8,6,3,12,50,2,6,5,62,6);

    // console.log(maxi);
}


{
    // function multi()
    // {
    //     let multi=0;
    //     for(let i=0 ;i<arguments.length;i++)
    //     {
    //         multi=multi+arguments[i];
    //     }
    //     return multi;
    // }

    // const rs=multi.apply(null , [12,2,3]);

    // console.log(rs);
}
