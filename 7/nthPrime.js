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

function nthPrime(n) {
  let i = 0;
  let primeNum = 0;

  while (i < n) {
    primeNum++;    
    if (isPrime(primeNum)) {
      i++;
    }
  }

  return primeNum;
}

console.log(nthPrime(10001));
