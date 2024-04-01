// Function to check if a number is prime
function isPrime(num) {
    // If the number is less than or equal to 1, it's not prime
    if (num <= 1) {
      return false;
    }
    // Check divisibility from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any number other than 1 and itself, it's not prime        
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to filter prime numbers from an array
  function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));// Use the filter method to keep only the prime numbers from the input array
  }
  
  // Test case
  const inputArray = [1, 2, 3, 61, 5, 6, 7, 8, 9, 10, 11, 12,23, 33, 37, 40, 41, 43, 47, 51];
  const resultArray = filterPrimes(inputArray);
  console.log(resultArray);
  