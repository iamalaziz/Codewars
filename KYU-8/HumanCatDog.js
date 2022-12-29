const calculateAge = (humanYears) => {
  if(humanYears === 1) {
    return [1, 15, 15]
  }
  else if(humanYears === 2) {
    return [2, 24, 24]
  }else {
    return [humanYears, (humanYears-2)*4+24, (humanYears-2)*5+24]
  }
}

console.log(calculateAge(1))
console.log(calculateAge(2))
console.log(calculateAge(3))
console.log(calculateAge(10))

//[human, cat, dog]
// [3,28, 29]
// [4, 32, 34]