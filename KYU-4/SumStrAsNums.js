// Sum Strings as Numbers * KYU4

function sumStrings(a, b) {
  if (a === "") return b;
  if (b === "") return a;

  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  let result = "";
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    result = sum + result;
  }

  if (carry > 0) result = carry + result;
  while (result[0] === "0" && result.length > 1) result = result.slice(1);

  return result;
}

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
