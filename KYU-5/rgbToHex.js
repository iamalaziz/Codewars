function rgb(r, g, b) {
  return '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
}
const rgbToHex = num => {
  num > 255 && (num = 255);
  num < 0 && (num = 0);
  let hex = num.toString(16);
  return hex.length === 1 ? ('0' + hex).toUpperCase() : hex.toUpperCase();
}

console.log(rgb(300,255,255));
