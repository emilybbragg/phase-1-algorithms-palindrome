//SOLUTION 1
//creates function that reverses word, to be used in isPalindrome function
function reverse(word){
  return word.split("").reverse().join("")
}



function isPalindrome(word) {
  // Write your algorithm here
  //reverse input string
const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}
//OR
function isPalindrome(word) {
const reversedWord = reverse(word)
return word === reversedWord
}

/* 
  Add your pseudocode here

  if input is same as reverse
    return tree
  else
    return false
*/


//SOLUTION 2




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
