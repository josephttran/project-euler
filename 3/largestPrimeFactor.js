function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i < num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function largestPrimeFactor(number) {
  if (isPrime(number)) return number;

  let largest = 0;
  for (let i = 2; i * i < number; i++) {
    if (isPrime(i)) {
      if (number % i === 0) {
        largest = i;
      }
    }
  }
  return largest;
}

console.log(largestPrimeFactor(600851475143));
