function productFib(prod) {
  let curr = 0;
  let next = 1;
  while (curr * next < prod) {
    next += curr;
    curr = next - curr;
  }
  return [curr, next, curr * next === prod];
}
console.log(productFib(74049690));