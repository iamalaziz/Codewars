function solution(str){
  const res = [];
   if (str.length % 2 === 1) { str += "_" };
   for (let i = 0; i < str.length; i = i + 2) {
       let pair = "";
       pair += str[i] + str[i + 1]
       res.push(pair)
   }
   return res
}