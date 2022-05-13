// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Function that returns is two strings are anagrams.

function isAnagram(str1, str2){
    const temp1 = str1.toLowerCase().match(/[a-z]/g).sort().join('');
    const temp2 = str2.toLowerCase().match(/[a-z]/g).sort().join('');
    console.log(temp1 === temp2);
    return temp1 === temp2;
}

isAnagram('The Morse Code', 'Here comes dots'); // false
isAnagram('Eleven plus two', 'Twelve plus one'); // true
isAnagram('Slot machines', 'Cash lost in me'); // true
isAnagram('rail safety', 'fairy tales'); // true
isAnagram('RAIL! SAFETY', 'fairy tales'); // true
isAnagram('Hi There', 'Bye There'); // false