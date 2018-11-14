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

function nthPrime(n) {
  let num = 0;
  let numStr = '1';
  if (n > 1000) { 
    numStr = '10';
  }
  for (let i = 0; i < n.toString().length; i++) {
   numStr += '0';
  }    
  num = parseInt(numStr);

  let primeBool = [];
  primeBool.length = num;
  primeBool[0] = primeBool[1] = false;  
  primeBool.fill(true, 2, primeBool.length);
  
  let primeArr = [];
  primeArr = basePrimeArr(Math.sqrt(num));

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
    if (count === n) {
      return i;
    }
  }
  
  return 0;
}

console.log(nthPrime(10001));
