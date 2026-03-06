const score=400;
console.log(score);

const balance=new Number(100);//creates number object 
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));//gives fixed 2 dot values 

const otherNumber=23.8966

let num = 123.456;
console.log(num.toPrecision(4));//o/p 123.5

const hundred=10000000
console.log(hundred.toLocaleString('en-IN'));//give comas bw 0
/*
Important Number Methods

toString() → Number ko string me convert karta hai.

let num = 100;
console.log(num.toString());

toFixed(n) → Decimal ke baad n digits tak number ko round karta hai.

let num = 23.4567;
console.log(num.toFixed(2)); // 23.46

toPrecision(n) → Number ko n total significant digits me convert karta hai.

let num = 23.4567;
console.log(num.toPrecision(3)); // 23.5

toExponential(n) → Number ko exponential form me convert karta hai.

let num = 12345;
console.log(num.toExponential(2));

valueOf() → Number object ki primitive value return karta hai.

let num = new Number(100);
console.log(num.valueOf());

toLocaleString() → Number ko local format me convert karta hai (commas etc.).

let num = 1000000;
console.log(num.toLocaleString()); // 1,000,000
Useful Number Properties

Number.MAX_VALUE → Maximum possible number

Number.MIN_VALUE → Minimum possible number

Number.isNaN() → Check karta hai value NaN hai ya nahi

Number.isInteger() → Check karta hai number integer hai ya nahi */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.2));

//to find random no between 1-100;
console.log(Math.floor(Math.random()*100)+1);

//to find random no btweween 1-5
console.log(Math.floor(Math.random() * 5) + 1);

//between a specic range
const min=10;
const max=20;
console.log(Math.random()*(max-min+1)+min);

/* MATH LIBRARY 
Important Math Methods (one line explanation)

Math.abs(x) → Number ka absolute (positive) value deta hai.

Math.abs(-5) // 5

Math.round(x) → Number ko nearest integer me round karta hai.

Math.round(4.6) // 5

Math.ceil(x) → Number ko upar wale integer me round karta hai.

Math.ceil(4.2) // 5

Math.floor(x) → Number ko neeche wale integer me round karta hai.

Math.floor(4.9) // 4

Math.min(a,b,...) → Sab numbers me smallest number return karta hai.

Math.min(2,5,1,9) // 1

Math.max(a,b,...) → Sab numbers me largest number return karta hai.

Math.max(2,5,1,9) // 9

Math.random() → 0 se 1 ke beech random number generate karta hai.

Math.random()

Math.sqrt(x) → Number ka square root deta hai.

Math.sqrt(25) // 5

Math.pow(x,y) → x power y calculate karta hai.

Math.pow(2,3) // 8

Math.trunc(x) → Decimal part hata kar integer part deta hai.

Math.trunc(4.9) // 4
Most used interview formula

1 se 10 tak random number:

Math.floor(Math.random() * 10) + 1

*/