function productFib(prod) {
  for (let i = 0; i < prod / 2; i++) {
    if (fibNumber(i) * fibNumber(i + 1) === prod) {
      return [fibNumber(i), fibNumber(i + 1), true];
    } else if (fibNumber(i) * fibNumber(i + 1) > prod)
      return [fibNumber(i), fibNumber(i + 1), false];
  }
}

function fibNumber(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibNumber(n - 2) + fibNumber(n - 1);
}

console.log(productFib(74049690));

// Another solution
function productFib2(prod) {
  let curr = 0;
  let next = 1;
  while (curr * next < prod) {
    next += curr;
    curr = next - curr;
  }
  return [curr, next, curr * next === prod];
}
// console.log(productFib2(74049690));