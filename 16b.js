const prompt = require('prompt-sync')();

function isPalindrome(word) {
    // Converts the word to lowercase
    word = word.toLowerCase();
    
    // Remove any characters that are not from A-Z 
    word = word.replace(/[^a-z]/g, '');

    // Reverse the word
    var reversedWord = word.split('').reverse().join('');

    // Check if the original word is equal to its reverse
    return word === reversedWord;
}

// Test the function
var word = prompt("Enter a word to check if it's a palindrome:");
if (isPalindrome(word)) {
    console.log("'" + word + "' is a palindrome.");
} else {
    console.log("'" + word + "' is not a palindrome.");
}
