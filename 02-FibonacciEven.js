//https://projecteuler.net/problem=2

var total = 0;
var numbers = [0, 0];

for(var i = 1; i < 4000000; i+=numbers[numbers.length - 2]) {
  numbers.push(i);
}

for(var i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    total += numbers[i];
  }
}

console.log(total);