// https://projecteuler.net/problem=6

sumTotal = 0;
squareTotal = 0;

for(i = 1; i < 101; i++) {
  sumTotal += i;
  squareTotal += i * i;
}

sumTotal = sumTotal * sumTotal;

console.log(sumTotal - squareTotal);