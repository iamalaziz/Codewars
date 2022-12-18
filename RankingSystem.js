function User() {
  this.rank = -8;
  this.progress = 0;
  this.HUNDRED = 100;
  this.HIGHEST = 8;
}
User.prototype.incProgress = function(rank) {
  if(rank === 0 || rank < -this.HIGHEST || rank > this.HIGHEST) throw new RangeError("Invalid Rank Level!. From -8 to 8, not including 0")
  if(rank === this.HIGHEST) return;

  
}
var user = new User();

console.log(user.incProgress(-7));