//https://projecteuler.net/problem=7

var i = 1;
var j = 1;
var primes = [];

// This loop will not include 1, 2, or 3 in the array
while(primes.length < 10002) {
  while(j < i && i % j !== 0) {
    j+=2;
  }
  if(j === i) {
    primes.push(j);
  }
  if(j === 1) {
    primes.push(2);
  }
  j = 3;
  i+=1;
}

console.log(primes[primes.length - 1]);