// var text="hello Evrybody.i am fine"
// var size =text.indexOf("i");
// console.log(size);

// JavaScript Array :-


// const fruits =[];
// fruits.push("banana","apple","mangos","Peach");
// console.log(fruits);
// fruits[5]="watermalen";
// console.log(fruits);
// console.log(Object.keys(fruits));
// fruits.length=10;
// // console.log(Object.keys(fruits));
// // console.log(fruits.length);  
// // fruits.length=7;
// console.log(fruits);
// console.log(Object.keys(fruits));


// let newarray =["Jay","Rutvik","abc","Def"];
// console.log(newarray[0], newarray[2]);

// Array Length Properties :--

// const newarray =[
//     "One",
//     "Two,",
//     "Three",
//     "Four"
// ];
// let text=newarray[1]="Five";
// console.log(newarray);

// Accessing The First Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// console.log(fruits[0]);
// console.log(fruits);

// Accessing The Last Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// var text=(fruits.length-3);
// console.log(fruits);

// Adding Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// function fun()
// {
//     fruits.push("Lemon");
//     document.getElementById("demo").innerHTML=fruits;
//     document.getElementById("demo1").innerHTML=fruits.length;   
// }

// Adding Array Element Without Push Function

// var fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// function fun()
// {
//     fruits[fruits.length]="Lemon";
//     document.getElementById("demo").innerHTML=fruits;
//     document.getElementById("demo1").innerHTML=fruits.length;   
// }


// const fruits =["Banana","Orange","Apple","Mango"];
// fruits[6]="lemon";
// console.log(fruits);

// let text ="";

// for(let i=0;i<fruits.length;i++)
// {
//     text=text+fruits[i]+"<br>";
// }
// console.log(text);

// ------------------------Array Method----------------------------------

// Converting Array To string

// const fruits =["Banana","Orange","Apple","Mango"];
// console.log(fruits.toString());

// Join Method :- Join Method All array Element Into A String

// const fruits =["Banana","Orange","Apple","Mango"];

// document.getElementById("demo").innerHTML=fruits.join("-");

// Poping And Pushing

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits.pop();
// fruits.pop();
// document.getElementById("demo1").innerHTML=fruits;


// Pop() :- Method Returns The Values That Was "Popped Out"

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits.pop();
// document.getElementById("demo1").innerHTML=fruits;

// JavaScript Array push()

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits.push("Kiwi");
// document.getElementById("demo1").innerHTML=fruits;

// push() :- Method Return The New Array length

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits.push("Kiwi");;
// document.getElementById("demo1").innerHTML=fruits;

// Shifting Element 
// JavaScript Array shift()

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits.shift();
// fruits.shift();
// document.getElementById("demo1").innerHTML=fruits;

// shift() :- Method Returns The Values That Was "Shifted Out"

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits.shift();
// document.getElementById("demo1").innerHTML=fruits;


// JavaScript Array Unshift

// Unshift :- Method Add A New Element To An Array (At The Beginning),And "Unshift" Older Element
// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits.unshift("KiWi");
// document.getElementById("demo1").innerHTML=fruits;


// Unshift :- Method Returns The New Array length

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits.unshift("Kiwi");
// document.getElementById("demo1").innerHTML=fruits;

// Changing Element

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits[2]="Kiwi"
// document.getElementById("demo1").innerHTML=fruits;

// JavaScript Array Add Element

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;
// fruits[fruits.length]="Kiwi";
// document.getElementById("demo1").innerHTML=fruits;

// JavaScript Array delete

// Array Element Can Be Deleted Using The JavaScrpi Opreter delete

// Using delete Leaves Undefined Holes In The Array

// Use pop() OR Shift() inserted.

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// delete fruits[2];

// fruits[2]="kiwi";

// document.getElementById("demo1").innerHTML=fruits;


// Merging (Concatenating) Array

// const girl=["nayana","Ramila"];
// const boys1=["Ramesh","Suresh","Kalu"];
// const boys2=["Rutvik","jay","nil","Path"];
// const mychildern=girl.concat(boys1,boys2);
// document.getElementById("demo").innerHTML=mychildern;

// The Concat :-Concat Method Does not Change The Existing Array.it Always Return A New Array.

// JavaScript Array Splite :-

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// fruits.splice(1,2,"Lemon");
// document.getElementById("demo1").innerHTML=fruits;

// const fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML="Orignal Aray:<br>"+fruits;

// let removed=fruits.splice(0,2,"Lemon");
// document.getElementById("demo1").innerHTML="New Aray:<br>"+fruits;

// document.getElementById("demo2").innerHTML="Remove Aray:<br>"+removed;


// using Splice() To Remove Elemenet

// {
    // const fruits =["Banana","Orange","Apple","Mango"];
    // document.getElementById("demo").innerHTML=fruits;
    // fruits.splice(1,2);
    // document.getElementById("demo").innerHTML=fruits;
// }

// Array .isArray

// let text =["abc","def","ghi"];
// let text1="jkl;sk;s";
// console.log(Array.isArray(text));

// Sorting Array

// let book =["Math","Chemistry","Physics","bio"];
// let bookks=book.sort();
// console.log(bookks);

// Reversing Array

// {
//     let book =["Math","Chemistry","Physics","bio"];
//     console.log(book);
//     let books=book.reverse();
//     console.log(books);
//     let bookks=book.sort();
//     console.log(bookks);
// }

// Number Sorting 

// {
//     const Number=[40,20,15,36,59,45,220,3665,44,1,25];
//     console.log(Number);
//     const Number1=Number.sort(function(a,b)
//     {
//         return a-b
//     }
//     );
//     console.log(Number1);
// }

//  Array Fill
{
    // const fruits =["Banana","Orange","Apple","Mango"];
    // const fill =fruits.fill("2",1)
    // console.log(fill);
}

// Array CopyWithin ()

{  
    // const fruits =["Banana","Orange","Apple","Mango"];
    // const copy =fruits.copyWithin(1,2);
    // console.log(copy);
}

// javaScript ValueOf()

{
    // const fruits =["Banana","Orange","Apple","Mango"];
    // const value = fruits.valueOf();
    // console.log(value);
}

// JavaScript Flat() Method

{
    // const fruits =[1,2,3,[4,5,[6,7,8,9,10]]];
    // const newarray1 =fruits.flat();
    // const newarray2 =fruits.flat(2);
    // const newarray3 =fruits.flat(3);
    // const newarray4 =fruits.flat(4);

    // console.log(newarray1);
    // console.log(newarray2);
    // console.log(newarray3);
    // console.log(newarray4);
}