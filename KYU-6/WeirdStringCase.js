
function toWeirdCase(string) {
  let result = [];
  const arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = [...arr[i]].map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase())
    result.push(word.join(""))
  }
  return result.join(" ");
}
console.log(toWeirdCase("Hello I am Mike!"));
