/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
 */

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
