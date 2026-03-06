let score="33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log( valueInNumber)//output is Nan
//Nan is a special type 
//converison into number 
//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1=>true,0 false
//""=>false;
//"hitesh"=>true

let someNumber=33
let stringNumber=String(someNumber);
console.log(stringNumber);//33 print 
console.log(typeof stringNumber);
//*******************OPERATIONS ************ ***//
let value=3;
let negValue=-value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%2);

let str1="hello";
let str2="hitesh";
let str3=str1+str2
console.log(str3)

//problem 
console.log("1"+2);//if string at first all are treated as string
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");//o/p 32 if string at last first all conversion done then string 

console.log(true);
console.log(+true); //op 1
//console.log(true+)//error
console.log(+"");//op 0

let num1,num2,num3;
num1=num2=num3=2+2;//tricky bhevaiour should not be used 

//prefix and postfix operator 
//x++,++x









