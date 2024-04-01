# SA.02-WK2-Code-Challenge
# solutions.js

# Case Swapper, Array Generator and Prime Number Filter

This repository contains three JavaScript functions:

1. `generateArray(start, end)`: This function generates an array of numbers between two given numbers `start` and `end`, inclusively. It can handle scenarios where `start` is less than or equal to `end`, as well as when `start` is greater than `end`, generating numbers in reverse order.

2. `filterPrimes(arr)`: This function takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. It efficiently identifies prime numbers and preserves their order in the input array.
3. `swapCase(str)`. This function accepts a string as input and swaps the case of each character. For example, it converts lowercase characters to uppercase and vice versa.


## Usage

### 1. Array Generator (`generateArray(start, end)`)

To generate an array of numbers between two given numbers, use the `generateArray()` function:

```javascript
const generatedArray = generateArray(1, 10);
console.log(generatedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




### 2.Case Swapper.

To swap the case of each character in a string, use the `swapCase()` function:

```javascript
const inputString = 'The Slay Little Fox';
const outputString = swapCase(inputString);
console.log(outputString); // Output: 'tHE sLAY lITTLE fOX'

# This README.md file provides an overview of the functions, their usage, and encourages contributions.