// https://projecteuler.net/problem=4

var total = 0;
var numbers = [];
var j = 100;

for(var i = 100; i < 1000; i++) {
  while(j < 1000) {
    total = i * j;
    total = total.toString();
    if(total.length === 5 && total[0] === total[4] && total[1] === total[3]) {
          total = parseInt(total);
          numbers.push(total);
    } else if(total[0] === total[5] && total[1] === total[4] && total[2] === total[3]) {
      total = parseInt(total);
      numbers.push(total);
    }
  j+=1;
  }
  j = 100;
}

numbers.sort(function(a,b){return a-b});
console.log(numbers[numbers.length - 1]);