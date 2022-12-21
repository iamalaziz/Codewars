function twoSum(arr, target) {
  const copy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let num2 = target - arr[i];
    copy.splice(0, 1);
    if (copy.includes(num2)) {
      console.log([i, arr.indexOf(num2, i+1)]);
    } 
  }
}
twoSum([1, 6, 5, 5, 4, 7, 8], 10);
