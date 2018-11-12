function sumNum(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumNum(num - 1);
}

function squareSum(num) {
  if (num === 1){
    return 1;
  }
  return (num * num) + squareSum(num-1);
}

function sumSquareDifference(n) {
  let squareOfSum = Math.pow(sumNum(n), 2);
  let sumOfSquares = squareSum(n);
  let difference = squareOfSum - sumOfSquares;
   
  return difference;
}

console.log(sumSquareDifference(100));