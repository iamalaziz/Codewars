function moveZeros(arr) {
  let len = arr.length;
  while (len >= 0) {
    if (arr[len] === 0) {
      arr.splice(len, 1);
      arr.splice(arr.length, 0, 0);
    }
    len--;
  }
  return arr;
}

const moveZeros2 = arr => {
  return arr.filter(item => item!== 0).concat(arr.filter(item => item === 0))
}

console.log(moveZeros2([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));