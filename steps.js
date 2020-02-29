function printSteps(num) {
  for(var i =1; i <= num; i++) {
    let str = '';
    for(var j = 0; j < i;j++) {
      str = str + "#";
    }
    console.log(str)
  }
}

printSteps(20)