/* data type is divided into 2 types how we can store in memory and how we are accessing that from the memory 
->primitive=> 7 categories : string,number,boolean,null,undefined,symbol,BigInt
-> non-primitive/reference type=>arrays,objects,functions

JavaScript is a dynamically typed language, not statically typed. This means that variable types are checked during runtime, and you do not need to explicitly declare the data type of a variable when you create it

*/
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
//symbol
const id=Symbol('123');
const anotherid =Symbol('123')//even if values of both symbols are same but still not give same output
console.log(id===anotherid);//not same 

const  bigNumber=3454565657676766664544n

//reference 
//array,objects,funcions 

//array 
const heros=["shaktiman","nagarraj"]
//objects in key value pair
let myObj={
    name:"hitesh",
    age:22,
}
//functions

const myfunction=function(){
console.log("hello world");
}
//data type return of non prmitive is object for ex=for function it in object function 
/*
Data type   :-   Returns
undefined   :-   undefined
null   :-   object
function   :-   object function(but in compiler it returns function only)
boolean    :-   boolean
bigInt   :-   bigInt
number   :-   number
string    :-   string
object     :-   object*/ 


/* MEMORY (STACK AND HEAP)

PRIMITIVE=>STACK stack m copy milti h 
HEAP=>NON PRIMITIVE  refrence milta h origin value m change hoga 
 */

let myYoutube="nikita.com";
let anothername=myYoutube;
anothername="chai aur code "
console.log(myYoutube);
console.log(anothername)
//o/p m alag alag isliye bcz we gave copy to anothername 


let user={
email:"niki",
upi:"user@gmail",
}
let user2=user;//isko ussi ka reference milega 
user2.email="nikita@gmail.com";

console.log(user.email);
console.log(user2.email);