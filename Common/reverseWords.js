// Function that reverse only the words on a string

function reverseWords(str){
    const words = str.split(' ');
    const reverseWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    console.log(reverseWords.join(' '));
    return reverseWords.join(' ');
}   

const str = 'I like to play the guitar';

reverseWords(str);
