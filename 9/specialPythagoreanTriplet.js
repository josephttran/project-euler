const num = 1000;

function tripletSumEqualsTargetSum(a, b, c, sum) {
  return a + b + c == sum;
}

function isPythagoreanTriplet(a, b, c) {
  return a**2 + b**2 === c**2;
}

function tripletProduct(a, b, c) {
  return a * b * c;
}

function specialPythagoreanTriplet(targetSum) {
  for (let c = targetSum - 3; c > 1; c--) {
    for (let b = c-1; b > 1; b--) {
      for (let a = b-1; a > 1; a--) {
        if (tripletSumEqualsTargetSum(a, b, c, targetSum)) {
          if(isPythagoreanTriplet(a, b, c)) {
            return { a, b, c, product: tripletProduct(a, b, c)};
          }
        }
      }
    }
  }
}

const pythagoreanTripletProduct =  specialPythagoreanTriplet(num);

//console.log('a=3, b=4, c=5 is Pythagorean Triplet: ', isPythagoreanTriplet(3, 4 ,5));
console.log(`a = ${pythagoreanTripletProduct.a}, b = ${pythagoreanTripletProduct.b}, c = ${pythagoreanTripletProduct.c}`);
console.log('Special Pythagorean Triplet product is: ', pythagoreanTripletProduct.product);
