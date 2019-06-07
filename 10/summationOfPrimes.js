function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function summationOfPrimes(num) {
  let sumPrime = 0;

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      sumPrime += i;
    }
  }

  return sumPrime;
}

//console.log(summationOfPrimes(10));
console.log(summationOfPrimes(2000000));