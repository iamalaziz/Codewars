/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value. */

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
