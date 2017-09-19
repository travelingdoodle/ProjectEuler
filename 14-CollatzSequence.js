//https://projecteuler.net/problem=14

var num = 0;
var high = 0;
var j = 0;
var k = 0;

for(var i = 2; i < 1000000; i++) {
  num = i;
  while(num !== 1) {
    if(num % 2 === 0) {
      num = num / 2;
    } else {
      num = (3 * num) + 1;
    j+=1;
  }
  if(j > k) {
    k = j;
    high = i;
  }
  }
  j = 0;
}

console.log(high);