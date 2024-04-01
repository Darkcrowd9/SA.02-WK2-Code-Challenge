function swapCase(str) {
    let swappedStr = '';
    // Iterate over each character in the input string
    for (let char of str) {
      // Check if the character is uppercase or lowercase and append to swapped string
      if (char === char.toUpperCase()) {
        swappedStr += char.toLowerCase();
      } else {        
        swappedStr += char.toUpperCase();
      }
    }
    return swappedStr;
  }
  // Test the function
  let inputString = 'The Slay Little Fox';
  let outputString = swapCase(inputString);
  console.log(outputString); 
  
  