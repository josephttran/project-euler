function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 3; i < number; i += 3) {
    sum += i;
  }

  for (let i = 5; i < number; i += 5) {
    if (i % 3 !== 0) {
      sum += i;      
    }
  }

  return sum;
}

console.log(multiplesOf3and5(1000));