function isPalindrome(num) {
  let str = num.toString();

  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true
}

function largestPalindromeProduct(n) {
  let largest = 0;
  let numStr = '';
  let maxNum = 0;
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < n; i++) {
     numStr += '9';
  }
  
  maxNum = parseInt(numStr);
  num1 = maxNum;
  num2 = maxNum;

  if (isPalindrome(maxNum * maxNum)) {
    return maxNum * maxNum;
  }

  while((num1 > 0 || num2 > 0)) {
    if (isPalindrome(num1 * num2)) {
      if (largest < num1 * num2) {
        largest = num1 * num2;       
      }
    }

    if (num2 > 0) {
      num2 -= 1;
    } else {
      num1 -= 1;
      num2 = num1;
    }
  }

  return largest;
}

console.log(largestPalindromeProduct(3));