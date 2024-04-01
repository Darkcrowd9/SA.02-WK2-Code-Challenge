// Function to generate an array of numbers between two given numbers
function generateArray(start, end) {
    let result = [];
    
     // Check if start is less than or equal to end   
    if (start <= end) {
        // If start is less than or equal to end, generate numbers from start to end (inclusive)
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
        // If start is greater than end, generate numbers from start to end (inclusive) in reverse order
      for (let i = start; i >= end; i--) {
        result.push(i);
      }
    }
    
    return result;// Return the generated array
  }
  
  // Test cases
  console.log(generateArray(1, -11)); 
  console.log(generateArray(-1, 11)); 
  