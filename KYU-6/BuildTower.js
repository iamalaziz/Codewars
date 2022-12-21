function towerBuilder(nFloors) {
  let res = [];
  for(let i = 0; i < nFloors; i++) {
    let space = " ".repeat(nFloors-1-i);
    const star = "*".repeat(2*i+1);
    let floor = space + star + space;
    res.push(floor)
  }
  return res;
}