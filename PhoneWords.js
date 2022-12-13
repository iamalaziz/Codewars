function phoneWords(stringOfNums) {
  const phone = [
    " ",
    "/",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "qprs",
    "tuv",
    "wxyz",
  ];
  // extractNumbers(stringOfNums);
  const arr = [];
  let currentNum = stringOfNums[0];
  let seq = stringOfNums[0];
  for (let i = 1; i < stringOfNums.length; i++) {
    let num = stringOfNums[i];
    if (num === currentNum) {
      seq += num;
    } else if (num === "0") {
      arr.push(seq);
      arr.push(" ")
      currentNum = stringOfNums[i + 1];
      seq = stringOfNums[i + 1];
      i += 1;
    } else if(num === "1"){
      arr.push(seq);
      arr.push("1")
      currentNum = stringOfNums[i + 1];
      seq = stringOfNums[i + 1];
      i += 1;
    }else{
      arr.push(seq)
      
    }
  }
  console.log(arr);
}
phoneWords("88222");

function extractNumbers(str) {
  const arr = [];
  let currentNum = str[0];
  let seq = str[0];

  // return arr;
  console.log(arr);
}
/* 
var pad = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
 */

/* for (let i = 1; i < str.length; i++) {
  switch (str[i]) {
    case currentNum:
      seq += str[i];
      break;
    case "1":
      arr.push("1");
      currentNum = str[i + 1];
      seq = str[i + 1];
      break;
    case "0":
      arr.push(" ");
      current = "";
      break;
    default:
      arr.push(current);
      current = str[i];
  }
} */
