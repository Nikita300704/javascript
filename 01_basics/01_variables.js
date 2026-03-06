const accountId = 144553
let accountEmail="nikki@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

//accountId=2; not allowed 
accountEmail="nik@hc.com"
accountPassword="34556"
console.log(accountId);

/*
prefered not to use var because of issue in scope and functional scope 

*/
console.table([accountId,accountEmail,accountPassword,accountCity])

