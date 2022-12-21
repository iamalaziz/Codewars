const solution = (start, finish, distance = finish - start) =>
  Math.floor(distance / 3) + (distance % 3);

console.log(solution(1, 7));

