const decompose = n => {
  let square  = n*n;
  const arr = [];
  for(let i = n-1; i > 0; i--) {
    if(i*i <= square){
      arr.push(i)
      square -= i*i
    }
  }
  return arr;
}
console.log(decompose(50));