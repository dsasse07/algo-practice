/**
You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one?
 */

function findOddDigits(n, k) {
  let [res, resDigitCount] = [0, 0]
  let power10 = Math.floor(Math.log10(n))

  // Case where there is not enough digits
  if (Math.ceil(power10 + 1) < k) return res

  // Loop until we get desired number of digits or num goes to 0
  while (n > 0 && resDigitCount < k) {
    // Get the first digit
    let digit = Math.floor(n / 10 ** power10)
    // If digit is odd, stick it into result
    // Increase digit counter to keep track
    if (digit % 2 !== 0) {
      res = res * 10 + digit
      resDigitCount++
    }
    // n is the remainer of the division
    n = n % 10 ** power10
    // We move to the next power of 10
    power10--
  }
  // If not enough digits, we failed
  if (resDigitCount < k) return 0
  // Return res
  return res
}
