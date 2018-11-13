/* This program return the number of primes between 1 to n */
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

function basePrimeArr(num) {
  let primeArr = [];
  for (let i = 0; i < num; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  return primeArr;  
}

function numPrime(n) {
  let primeBool = [];
  primeBool.length = n;
  primeBool[0] = primeBool[1] = false;  
  primeBool.fill(true, 2, primeBool.length);
  
  let primeArr = [];
  primeArr = basePrimeArr(Math.sqrt(n));

  primeArr.forEach(ele => {
    let i = ele;
    while (i < primeBool.length) {
      i += ele;      
      if (primeBool[i]) {
        primeBool[i] = false;
      }
    }    
  })

  let count = 0;
  for (let i = 0; i < primeBool.length; i++) {
    if (primeBool[i]) {
      count++;
    }
  }
  
  return count;
}

console.log(numPrime(10000000));
