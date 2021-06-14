//Palindromes are words or phrases that read the same backward and forward, letter for letter, number for number, or word for word.
// Write a function that returns is a string is a palindrome.

function isPalindrome(str){
    const temp1 = str.toLowerCase().match(/\w/g).join('');
    const temp2 = str.toLowerCase().match(/\w/g).reverse().join('');
    console.log(temp1, temp2, temp1 === temp2);
    return temp1 === temp2;
}

const str1 = 'A nut for a jar of tuna!!'; // true
const str2 = 'Was it a car or maybe a cat I saw?'; // false
const str3 = 'Murder for a jar of red rum.' // true
const str4 = 'Gateman sees name and garageman sees name tag.' // false
const str5 = 'Some men interpret nine memos.' // true

isPalindrome(str1);
isPalindrome(str2);
isPalindrome(str3);
isPalindrome(str4);
isPalindrome(str5);