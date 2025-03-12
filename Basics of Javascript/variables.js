const accID = 144553
// by using const keyword now we cannot change the value of accID in this program
let accEmail = "abc@yahoo.com"
// by using 'let' we can change the value of the variable unlike in the case of 'const'
var accPassword = "123456"
/*
'var' is function/global-scoped and allows re-declaration, while 'let' is block-scoped and does not allow re-declaration in the same block.
Prefer not to use 'var' beacause of issue in block scope and functional scope
*/
accCity = "Kurukshetra"
// a variable can also be declared without using any keyword in Javascript but this method is usually avoided
let accState
console.log(accID)
console.table([accID, accEmail, accPassword, accCity, accState])
// in Javascript, there is no compulsion to put semicolon at the end of command
console.log(accState);
