// Primes in numbers
function primeFactors(n) {
  let result = "";
  let half= n/2;
  for (let i = 2; i <= half; i++) {
    let exp = 0;
    while (n % i === 0) {
      exp++;
      n /= i;
    }
    exp === 1 && (result += `(${i})`);
    exp > 1 && (result += `(${i}**${exp})`);
  }
  if(result === ''){
    return `(${n})`
  }
  return result;
}

console.log(primeFactors(5971638));