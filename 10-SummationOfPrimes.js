//https://projecteuler.net/problem=10

var i = 2;
var j = 1;
var total = 2;

// This loop will not include 1, 2, or 3 in the array
while(i < 10) {
  while(j < i && i % j !== 0) {
    j+=2;
  }
  if(j === i) {
    total += j;
  }
  j = 3;
  i+=1;
  console.log(total);
}
