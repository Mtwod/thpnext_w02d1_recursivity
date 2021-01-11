// Return true if number is a prime number, else otherwise
const isPrimeNumber = (n, divisor = n-1) => {
  if (n < 2) return 0;
  if (divisor === 1) return true;
  if (n % divisor === 0) return false;
  return isPrimeNumber(n, divisor - 1);
}

console.log(isPrimeNumber(-1));
console.log(isPrimeNumber(0));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(50));
console.log(isPrimeNumber(51));
console.log(isPrimeNumber(13));
console.log(isPrimeNumber(43));
