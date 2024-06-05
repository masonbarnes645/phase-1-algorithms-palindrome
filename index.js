function isPalindrome(word) {
  const originalWord = word.split("")
  const reversedWord = originalWord.toReversed()
 
    if (originalWord.toString() === reversedWord.toString()){
      return true;
    }
    else{
      return false;
    }
}

/* 
  Add your pseudocode here
  split given string into letters on array split()method
    reverse the array array.reverse method
  test if array1 = newArray
  return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
