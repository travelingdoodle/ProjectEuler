//https://projecteuler.net/problem=5

var i = 1;
var j = 1;

while(j < 20) {
  if(i % j === 0) {
    j += 1;
  } else {
    i += 1;
    j = 1;
  }
}

console.log(i);