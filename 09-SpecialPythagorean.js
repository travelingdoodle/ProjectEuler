//https://projecteuler.net/problem=9

var a = 0;
var b = 0;
var c = 0;
var total = 0;

while(total !== 1000) {
  b = a + 1;
  a += 1;
  while(b < 999 && total !== 1000) {
    b += 1;
    c = Math.sqrt((a * a) + (b * b));
    if(((a * a) + (b * b)) === (c * c) && c % 1 === 0) {
      total = a + b + c;
    }
  }
}

console.log(total);
console.log(a);
console.log(b);
console.log(c);
console.log(a * b * c);