// Function that reverse only the words on a string

function reverseWords(str){
    const arr = str.split(' ');
    const reversed = arr.map(world => {
        return world.split('').reverse().join('');
    });
    console.log(reversed.join(' '));
    return reversed.join(' ');
}   

const str = 'I like to play the guitar';

reverseWords(str);
