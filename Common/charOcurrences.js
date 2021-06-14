// Given a string print the characters with their number of occurences
// input :: aaabbbccddddd
// output :: a3b3c2d5

function charOcurrences(str){
    let result = str[0];
    let count = 1;
    for(let i=1; i<str.length; i++){
        if(str[i] === str[i-1]){
            count++
        } else {
            result += count;
            result += str[i];
            count = 1;
        }
    }
    result += count;

    console.log(result);
    return result;
}

const str = 'aaabbbccddddd';
charOcurrences(str);