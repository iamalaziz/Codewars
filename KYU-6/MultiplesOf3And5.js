function solution(number){
  const arr = [];
    for (let i = 1; i < number; i++) {
        if(i % 5 === 0 && arr.includes(i) === false) {
            arr.push(i)
        } else if(i % 3 === 0 && arr.includes(i) === false){
            arr.push(i)
        }
    }
    return arr.reduce((acc, el) => acc + el, 0)
}