arr.forEach((item, index) => {
    if(item === 0){
      arr.splice(index, 1)
      arr.splice(arr.length, 0, 0)
    }
  });