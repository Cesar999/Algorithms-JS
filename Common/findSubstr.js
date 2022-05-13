// check whether a string contains a substring

// function findSubstr(str, substr){
//     const res = str.includes(substr);
//     console.log(res);
//     return res;
// }

// finds the first single in the array

function findSubstr(str, substr){
    let k = 0;
    for(let char of str){
        if(char === substr[k]){
            k++;
        } else {
            k = 0;
        }

        if(k === substr.length){
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

const str1 = 'Is the violence in our nature just the image of our maker?';
const substr1 = 'image';
findSubstr(str1, substr1); // true

const str2 = 'Is the violence in our nature just the image of our maker?';
const substr2 = 'images';
findSubstr(str2, substr2); // false