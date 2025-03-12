let score = 23
console.log(typeof score);
let str = "33xyz"
let num = Number(str)
// a special value NaN will now be stored in the num
console.table([typeof str, typeof num, num])

/*
"33" -> 33
"23abc" -> NaN (Not a Number) but type of NaN is a number
true -> 1 and false -> 0
null -> 0
undefined -> NaN
As you can see above that all of the Number conversions eventually give a 'number' datatype value
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([typeof booleanIsLoggedIn, booleanIsLoggedIn])

/*
1 -> true and 0 -> false
"" (empty string) -> false
"Raghav" (non-empty string) -> true
*/

num = 1992
let someString = String(num)
console.table([num, someString, typeof someString])

// Operations in Javascript
let value = 3
let negValue = -value
console.table([value, negValue, 5 + 2, 1 + 2 + "2", "1" + 2 + 2]) // some things to learn in JS
console.log(3 / 2); // prints 1.5
