function divisorMain(n) {
  let d = calculateDivisor(n);
  let sum = 0;
  for(i= 0; i < d.length; i++) {
    let k = calculateDivisor(d[i]); 
    for(j =0; j < k.length; j++ ) {
      sum = sum + k[j]
    }
  }
  return sum;
}

function calculateDivisor(n) {
  let divisors = [];
  for(var i=1; i <= n ; i++) {
    if(n%i == 0) {
      divisors.push(i)
    }
  }
  return divisors;
}

console.log(divisorMain(4))