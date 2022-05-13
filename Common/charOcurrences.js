// Given a string print the characters with their number of occurences
// input :: aaabbbccddddd
// output :: a3b3c2d5

// All occurrences on string
// function charOcurrences(str){
//     const charCounter = {};

//     for(let i=0; i<str.length; i++){
//         if(charCounter.hasOwnProperty(str[i])){
//             charCounter[str[i]]++;
//         } else {
//             charCounter[str[i]] = 1;
//         }
//     }

//     const res = Object.entries(charCounter);
//     console.log(res.flat().join(''));

//     return res;
// }

// Sequence ocurrences
function charOcurrences(str){
    let result = '';
    let count = 1;

    for(let i=0; i<str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        } else {
            result+=`${str[i]}${count}`;
            count = 1;
        }
    }

    console.log(result);
}

const str1 = 'aaabbbccddddd';
charOcurrences(str1);

const str2 = 'aaabbbccdddddbbbaaccccd';
charOcurrences(str2);