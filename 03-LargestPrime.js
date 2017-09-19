//https://projecteuler.net/problem=3

var i = 1;
var j = 1;
var total = 1;
var target = 600851475143;

while(total < target) {
  while(j <= i && i % j !== 0) {
    j+=2;
  }
  if(j === i && target % j === 0) {
    total = total * j;
    target = target / j;
  }
  j = 3;
  i+=1;
}

console.log(target);