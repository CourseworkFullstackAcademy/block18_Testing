/*Unit Test 1: 
A function called "multiplication" that returns the product of the two input numbers.

Expect multiplication(x, y) to be a number
Expect multiplication(x, y) to be equal to xy
Expect multiplication("x", y) to be an error
Expect multiplication( , ) to be an error
Expect multiplication(x, "y" ) to be an error
Expect multiplication(x, √(-1) ) to be an error

*/

/*Unit Test 2:
A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]

Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
Expect concatOdds("string", [9, 1, 1, 1, 4, 15, -1]) to be an error
Expect concatOdds([3, 2, 1], "string") to be an error
Expect concatOdds( , [9, 1, 1, 1, 4, 15, -1]) to be an error
Expect concatOdds(["a", "b", "c"], ["d", "e", "f", "g", "h"]) to be an error
Expect concatOdds([3, "2", 1], ["9", 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 15]
Expect ([3.7, 2, 1], [9, 1, 1, 1, 4, 15.89, -1]) to be [-1, 1, 9]

*/


/*Functional Tests for:
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

1. When a user clicks on checkout in shopping cart, they should be shown a prompt with options to check out as a guest, to create an account or to log in if they are not already logged in. There should be a message that says "Log in or Create an Account for Faster Checkout for Future Orders."

2. When a user clicks checkout with an empty shopping cart, they should be shown a message that says "Please at least one item to your cart to check out. Here hare some great deals we have to choose from! (Show some deals of popular products)"

3. When a user clicks log in after clicking checkout, give the option to log in with email and password or to log in with Google.

4. When a user logs in  and has credit card and shipping address info saved, give option to use this instead of typing it in again.

*/
