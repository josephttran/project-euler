function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
return a / gcd(a, b) * b
}

function smallestMult(n) {
let arr = [];
let smallest = 1;

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

arr.forEach(ele => {
  smallest = lcm(smallest, ele)
});

return smallest;
}

console.log(smallestMult(20));