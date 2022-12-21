function User() {
  this.rank = -8;
  this.progress = 0;
  this.HUNDRED = 100;
  this.HIGHEST = 8;
}

User.prototype.incProgress = function(rank) {
  if(rank === 0 || rank < -this.HIGHEST || rank > this.HIGHEST) throw new RangeError("Invalid Rank Level!. From -8 to 8, not including 0")
  if(rank === this.HIGHEST) return;

  let diff = (rank < 0 && this.rank > 0) || (rank > 0 && this.rank < 0) ? Math.abs(rank) + Math.abs(this.rank) : rank - this.rank;
  
  if(rank === this.rank + 1) {
    this.progress += 3;
    console.log("Hello");
    console.log(this.progress)
  }
}

let user = new User();

console.log(user.incProgress(-7));