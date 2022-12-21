/* Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

const sumOfDigits = (num) => {
  if(num < 10) return num;
  else {
    let arr = num.toString().split('');
    let sum = arr.reduce((a,b) => Number(a) + Number(b), 0);
    return sumOfDigits(sum)
  }
}

console.log(sumOfDigits(23451));
