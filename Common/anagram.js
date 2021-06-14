// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Function that returns is two strings are anagrams.

function isAnagram(str1, str2){
    const s1 = str1.toLowerCase().split('').sort().join('').trim();
    const s2 = str2.toLowerCase().split('').sort().join('').trim();
    console.log(s1, s2, s1 === s2);
    return s1 === s2;
}

isAnagram('The Morse Code', 'Here comes dots'); // false
isAnagram('Eleven plus two', 'Twelve plus one'); // true
isAnagram('Slot machines', 'Cash lost in me'); // false
isAnagram('rail safety', 'fairy tales'); // true
isAnagram('RAIL! SAFETY', 'fairy tales'); // false
isAnagram('Hi There', 'Bye There'); // false