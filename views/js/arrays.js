console.log ('JavaScript Arrays - Example scripts loaded');

const strArr = 'JavaScript';

// Strings are by default concatenated arrays
console.log (strArr.length);

// Reverse string using reduce method
const reverseString = strArr.split ('').reduce ((acc, cur) => cur + acc);
console.log (reverseString);

// Palindrome
const paliWordObj = {
    sentence: 'Cigar? Toss it in a can. It is so tragic.',
    fourWord: 'noon',
    nonpalindrome: 'test'
};

// Using below variables we can test the different palidrome and non palindrom sentence / Words
const paliTestReadySentence = paliWordObj.sentence.replace (/[^a-zA-Z0-9]/g, '').toLowerCase ();
const paliTestReadyWord = paliWordObj.fourWord.replace (/[^a-zA-Z0-9]/g, '').toLowerCase ();
const nonPaliTestReady = paliWordObj.nonpalindrome.replace (/[^a-zA-Z0-9]/g, '').toLowerCase ();

// Option 1
// Split the word to an array and using reduce reverse the string then use equality to check the strings
const paliWordReverse = nonPaliTestReady.split ('').reduce ((acc, cur) => cur + acc);
nonPaliTestReady === paliWordReverse ? console.log ('Palindrome') : console.log ('Not a Palindrome');
