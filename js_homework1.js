// Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді
// коментарів, як відбувається перетворення в кожному прикладі:

/* Solution checker :D */
console.log('Paste here expression which result want to check');
/* End */


// Results are presented on the end of expression line

'number' + 3 + 3 // number33
// Change number 3 into string '3'
// Change the second number 3 in the same way as first
// Merge all together as one string 

null + 3 // 3
// Change null to nothing
// Add "nothing" to 3

5 && "qwerty" // "qwerty"
// check first operand which is on the left, it's true because it's number > 0
// check second operand, it's true, because not empty string
// return last operand because it's and and all operands are true

+'40' + +'2' + "hillel"; // 42hillel
// Add string 40 to empty string which equal nothing
// add string to to existing string
// add string hillel to existing string

'10' - 5 === 6; // false
// 10 changed to number
// 10 - 5 = 5
// 5 is not equal 6

true + false // 1
// change bool true to 1
// change false to 0 number
// 1 + 0 = 1

'4px' - 3 // 1px
// change number 3 to string '3'
// string minus gives us NaN

'4' - 3 // 1
// change string 4 to number 4
// 4 minus 3 equal 1 (as numbers)

'6' + 3 ** 0; // 6
// 3 ** 0 up to 0 gives us 1
// change number 1 to string 1 (as string as first operand here)
// string 6 plus string 1 equal string 61

12 / '6' // 2
// change string 6 to number 6
// 12 divide by 6 is 2

'10' + (5 === 6); // 10false
// 5 === 6 gives us fail, because values are different/not equal
// false to string will be string "false"
// 10 + false equal string 10false

null == '' // true
// Boolean('') = false
// false not equal to null

3 ** (9 / 3); // 27
// 9 divide per 3 is 3
// 3 to power 3 is 27

!!'false' == !!'true' // true
// Boolean('false') is equal true because string is not empty
// Boolean('true') also is true
// twice negated true is true
// tso have finally true  OR true => true

0 || '0' && 1 // 1
// Boolean(0) is false
// Boolean('0') is trues because string is not empty
// so expression false OR true AND true will give us 1 because AND has on both sides true so return last positive 

(+null == false) < 1; // false
// null equal false (0) so have true
//  true equal 1 so not les than 1, will have false

false && true || true // true
// false OR true gives us false because it's a first negative
// false OR true gives us true because OR returns last positive if not all falses

false && (false || true); // false
// false OR true gives us true
// false AND true gives us false

(+null == false) < 1 ** 5; // false
// null OR false gives us true
// 1 to power 5 is still 1
// true (us 1) is not less than 1, so final result is false 