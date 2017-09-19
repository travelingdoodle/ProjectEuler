//https://projecteuler.net/problem=12

var i = 1;
var j = 0;
var k = 0;
var total = 0;
var solved = false;

while(solved === false) {
  total += i;
  while(j < total + 1) {
    j++;
    if(total % j === 0) {
      k++;
    }
  }
  if(k >= 500) {
    solved = true;
  }
  i++;
  j = 0;
  k = 0;
}

console.log(total);