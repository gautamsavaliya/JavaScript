
// ---------------- Object ------------------------------


// const student={
//     firstname:"Ramesh",
//     lastname:"Lakhani"
// };
// console.log(student);

// ---------------- Object Declaration -----------------------

// {
//     const student ={
//         key1:Value1,
//         key2:value2
//     }
// }

// --------------------Object Creation --------------------------

{
    // const name={
    //     name:"Lal",
    //     age:25,
    //     location:"surat"
    // };

    // console.log(typeof name);
}

// ---------------------Accessing Object Properties-----------------

// 1.Using Dot Notation ---------------

{
    // Objectname.key
}

// Example :-

{
    // const name ={
    //     name:"Lal",
    //     age:25
    // }
    // const a=name.age;
    // console.log(a);
}

// 2.Using Bracket Notation ------------

{
    // objectname["Property name"]
}

// Example :-

{
    // const name ={
    //     name:"Lal",
    //     age:25
    // }
    // console.log(name["age"]);
}


// Javascript Nasted Object

{
    // const student={
    //     name:"Ram",
    //     age:20,
    //     Location:"Surat",
    //     masks:{
    //         maths:20,
    //         phy:30,
    //         che:60
    //     }
    // };
    // console.log(student.name);
    // console.log(student.masks.maths);
}

// ------------------JavaScript Object Method -------------------

/*
        1.Object.assign()
        2.Object.create()
        3.Object.entries()
        4.Object.is()
        5.Object.hasOwnProperty()
        6.Object.freeze()
        7.Object.getOwnPropertyNames()
        8.Object.setPrototypeOf()
        9.Object.toString()
        10.Object.valueOf()
        11.Object.values()
*/

// ------------------ 1.assign --------------------

{
    // const student={
    //     name :"Lal",
    //     age:22
    // };

    // const obj ={}; //clone

    // const copy =Object.assign(obj,student);

    // console.log(copy);
    // console.log(student);

// ------------------- assign(Parameters)------------------------
 

    // const obj1={a:10};
    // const obj2={b:20};
    // const obj3={c:30};

    // const obj4=Object.assign(obj1,obj2,obj3);
    // console.log(obj4);
}

// ------------------ 2.Create --------------------

{
    // const student={
    //     name :"Lal",
    //     age:22,
    //     location:"Surat",
    //     Show()
    //     {
    //         console.log("Name:",this.name);
    //     }

    // };
    // const obj1 =Object.create(student);
    // obj1.name="Rutvik";
    // obj1.Show();
}

// ------------------ 3.Entries --------------------

{
    // const student={
    //     Name:"Lal",
    //     Age:20,
    //     Location:"Surat"
    // }

    // console.log(Object.entries(student));
    
// keys are arranged randomly

    // const no ={
    //     22:"a",
    //     66:"b",
    //     15:'o'
    // }
    // console.log(Object.entries(no));

// Iterate Through Key-Value Pairs

    // const obj={
    //     Name :"Amar",
    //     age:20,
    //     Location:"Surat"
    // };


    // for(const [key,value] of Object.entries(obj))
    // {
    //     console.log(`${Key}: ${Value}`);
    // }
}

// ------------------ 4.is --------------------

{
    // const obj ={
    //     a:1,
    //     a:2
    // };
    // console.log(Object.is(obj,obj));

    // console.log(Object.is("javascript","javascript"));

    // console.log(Object.is("JavaScript","javaScript"));
    
    // console.log(Object.is(null,null));


    // const obj={a:1};
    // const obj1={a:1};

    // console.log(Object.is(obj,obj));

    // console.log(Object.is(obj,obj1));


//  is() With Special Cases

    // console.log(Object.is([],[]));
    // console.log(Object.is(0,0));
    // console.log(Object.is(0,-0));
    // console.log(Object.is(-0,-0));
    // console.log(Object.is(NaN,0/0));
}


// ------------------ 5.ObjectHasOwnProperty --------------------

{
    // const obj={
    //     Name :"Amar",
    //     age:20,
    //     Location:"Surat"
    // };

    // console.log(obj.hasOwnProperty("No"));

    // const no={id:1,toString:'no'};
    // console.log(no.hasOwnProperty("id"));
}

// ------------------ 6.Objec.freeze() --------------------

{
    // const obj={
    //     Name:"Ramesh",
    //     Age:20,
    //     Location:"surat"
    // };

    // const a=Object.freeze(obj);

    // obj.Name="Kalu";
    // console.log(obj.Name);
}

// ------------------ 7.Object.getOwnPropertyNames() --------------------

{
    // const obj={
    //     Name:"Ramesh",
    //     Age:20,
    //     Location:"surat"
    // };

    // const a=Object.getOwnPropertyNames(obj);

    // console.log(a);
}

// ------------------ 8. Object.setPrototypeOf() --------------------

{
    // const a={};


    // const b={Name:"Suresh"};

    // Object.setPrototypeOf(a,b);

    // console.log(a.Name);
}

// ------------------ 9. Object.tostring --------------------

{
    // const a=10;

    // console.log(typeof a);


    // console.log(typeof a.toString());

}

// ------------------ 10. Object.valueof() --------------------

{
    
    // const num=new Number(20);
    
    // console.log(num);
    
    // console.log(num.valueOf());
    
    
    // const a={20:10};
    
    // console.log(a);
    
    // console.log(a.valueOf());


}

// ------------------ 10. Object.values--------------------

{
    // const no={
    //     65:"a",
    //     66:"b",
    //     67:"c",
    //     68:"d"
    // }

    // console.log(Object.values(no));


    // const obj={42:"a",22:"b",63:"c"};
    
    // console.log(Object.values(obj));
    
    // JavaScript Object.values() With String

    // const string = "code";
    // console.log(Object.values(string));

    // values() with string returns an array of characters
}
