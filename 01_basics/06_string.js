const name="nikita"
const repo=50;
//concatinate
console.log(name+repo);//old syntax 
console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName=new String('nikita');
console.log(gameName[0]);
//learn about functions of strings 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);//slicing 
console.log(newString);

const anotherString=gameName.slice(-8,4)//can start with negative values aldso ie from backwards
console.log(anotherString);

const newString1 ="   hitesh   "
console.log(newString1.trim());//remove extraspace 

//replace 
const url="nikki.comhitesh%20chaudhary"
url.replace('%20','-')//replace value 

//converting into array 
let text="apple,banana,mango";
let result=text.split(",");//split on the basis of separator ,
console.log(result);




/* METHODS OF STRINGS IN JAVASCRPT
length – string ki total characters ki count batata hai.

toUpperCase() – string ko capital letters me convert karta hai.

toLowerCase() – string ko small letters me convert karta hai.

charAt(index) – given index par ka character return karta hai.

indexOf(value) – string me value pehli baar kis position par hai wo batata hai.

lastIndexOf(value) – string me value last time kis position par hai wo batata hai.

includes(value) – check karta hai string me given value present hai ya nahi.

startsWith(value) – check karta hai string given value se start hoti hai ya nahi.

endsWith(value) – check karta hai string given value par end hoti hai ya nahi.

slice(start, end) – string ka ek part extract karta hai.

substring(start, end) – string ka portion return karta hai between indexes.

replace(old, new) – string me ek value ko doosri value se replace karta hai.

replaceAll(old, new) – string me sabhi occurrences replace karta hai.

trim() – string ke start aur end ke extra spaces remove karta hai.

concat() – do ya zyada strings ko join karta hai.

split(separator) – string ko array me convert karta hai based on separator.

repeat(n) – string ko n times repeat karta hai.
*/
