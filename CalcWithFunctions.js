function zero(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return arr[1];
    } else if (arr[0] === "-") {
      return 0 - arr[1];
    } else if (arr[0] === "*") {
      return 0;
    } else if (arr[0] === "/") {
      return 0;
    }
  } else return 0;
}
function one(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 1 + arr[1];
    } else if (arr[0] === "-") {
      return 1 - arr[1];
    } else if (arr[0] === "*") {
      return 1 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(1 / arr[1]);
    }
  } else return 1;
}
function two(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 2 + arr[1];
    } else if (arr[0] === "-") {
      return 2 - arr[1];
    } else if (arr[0] === "*") {
      return 2 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(2 / arr[1]);
    }
  } else return 2;
}
function three(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 3 + arr[1];
    } else if (arr[0] === "-") {
      return 3 - arr[1];
    } else if (arr[0] === "*") {
      return 3 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(3 / arr[1]);
    }
  } else return 3;
}
function four(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 4 + arr[1];
    } else if (arr[0] === "-") {
      return 4 - arr[1];
    } else if (arr[0] === "*") {
      return 4 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(4 / arr[1]);
    }
  } else return 4;
}
function five(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 5 + arr[1];
    } else if (arr[0] === "-") {
      return 5 - arr[1];
    } else if (arr[0] === "*") {
      return 5 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(5 / arr[1]);
    }
  } else return 5;
}
function six(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 6 + arr[1];
    } else if (arr[0] === "-") {
      return 6 - arr[1];
    } else if (arr[0] === "*") {
      return 6 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(6 / arr[1]);
    }
  } else return 6;
}
function seven(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 7 + arr[1];
    } else if (arr[0] === "-") {
      return 7 - arr[1];
    } else if (arr[0] === "*") {
      return 7 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(7 / arr[1]);
    }
  } else return 7;
}
function eight(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 8 + arr[1];
    } else if (arr[0] === "-") {
      return 8 - arr[1];
    } else if (arr[0] === "*") {
      return 8 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(8 / arr[1]);
    }
  } else return 8;
}
function nine(arr) {
  if (arr) {
    if (arr[0] === "+") {
      return 9 + arr[1];
    } else if (arr[0] === "-") {
      return 9 - arr[1];
    } else if (arr[0] === "*") {
      return 9 * arr[1];
    } else if (arr[0] === "/") {
      return Math.floor(9 / arr[1]);
    }
  } else return 9;
}

function plus(num) {
  return ["+", num];
}
function minus(num) {
  return ["-", num];
}
function times(num) {
  return ["*", num];
}
function dividedBy(num) {
  return ["/", num];
}

console.log(eight(dividedBy(three())));
