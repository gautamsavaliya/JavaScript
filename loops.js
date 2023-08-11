/* For Of Loop */

// The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

{
    // Syntex

    // for(variable of iterable)
    // {
    //     //Code Be Executed
    // }
}


// ----iterable :-array,set,mep,string

/*  For..of with array  */
{

    // const car=["audi","BMW","tesla","TATA","","Farari",""];

    // for(let i of car)
    // {
    //     console.log(i);
    // }
}

/* For..Of With String */

{
    // const xyz ="hi How Are You....!"

    // for(let i of xyz)
    // {
    //     console.log(i);
    // }
}

/* For..Of With map */

{
    // const abc=new Map();

    // abc.set("Name","Ram");
    // abc.set("Age",18);

    // for(let [key,value] of abc)
    // {
    //     console.log(key+"--"+value);
    // }
}

/* For..OF With set  */

{
    // const abc = new Set();

    // abc.add("Ram");
    // abc.add(15);
    // abc.add("Laxman");
    // abc.add(9);

    // for (let i of abc)
    // {
    //     console.log(i);
    // }
}

/* For..in loop */

{
    // for(key in object)
    // {
    //     //code be Executed
    // }
}

{
    // const student={
    //     'Name':"Ram",
    //     'Age':18,
    //     'Location':"Suart"
    // };

    // for(let i in student)
    // {
    //     console.log(i+"-"+student[i]);
    // }
}

{
    //     const salary ={
    //         'Ram':25500,
    //         'Lakhan':20000,
    //         'Sita':10000
    //     };
    
    
    //     for(let i in salary)
    //     {
    //         const abc= "$"+salary[i];

    //         console.log(`Tha Name is ${i} and it's Salary Is ${abc}`);
    //     }
}

// You can also use for...in loop String

{
    // const abc = "Hi How Are You...!" 

    // for(let i in abc)
    // {
    //     console.log(abc[i]);
    // }
}

// You can also use for...in loop Array
{
    // const a=["audi","BMW","tesla","TATA","","Farari",""];

    // for(let i in a)
    // {
    //     console.log(a[i]);
    // }
}

/* JavaScript forEach() */

/* The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets. */

{
    // array.forEach(function(currentValue, index, arr));

    // function(currentValue, index, arr) - a function to be run for each element of an array
    // currentValue - the value of an array
    // index (optional) - the index of the current element
    // arr (optional) - the array of the current elements
}

/* For Each with array */ 

{
    // // let students = ['John', 'Sara', 'Jack'];

    // // students.forEach(myFunction);

    // // function myFunction(item) 
    // // {
    // //     console.log(item);
    // // }

    // let car = ["audi","BMW","tesla","TATA","","Farari",""];

    // car.forEach(abc);

    // function abc(i,a,car)
    // {
    //     car[a] = 'Hello ' +i;
    //     console.log(i);
    // }
}

/* ForEach with set */

{
    // const a=new Set();

    // a.add("Rutvik");
    // a.add("Ram");
    // a.add(15);

    // a.forEach(i);

    // function i(a)
    // {
    //     console.log(a);
    // }
}

/* ForEach With Map */

{
    // const a=new Map();

    // a.set("Name","Ram");
    // a.set("Age","15");
    // a.set("Location","Surat");

    // a.forEach(i)
    // function i(be,i)
    // {
    //     console.log(i+"-"+be);
    // }
}