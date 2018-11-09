function sumEvenFibonacci(n) {
  let sum = 0;
  let fib = [];

  fib[0] = 1;
  fib[1] = 2;

  let i = 2;
  sum += 2;
  while (true) {
    if (fib[i - 1] + fib[i - 2] > n) {
      break;
    }

    fib[i] = fib[i - 1] + fib[i - 2];
    if (fib[i] % 2 === 0) {
      sum += fib[i];
    }
    
    i++;
  }

  return sum;
}

console.log(sumEvenFibonacci(4000000))