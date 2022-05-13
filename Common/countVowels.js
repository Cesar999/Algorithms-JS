// find vowels

function countVowels(str){
    // const newStr = str.toLowerCase();
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // let count = 0;
    // for(let char of newStr){
    //     if(vowels.includes(char)){
    //         count++;
    //     }
    // }

    const vowels = str.match(/[aeiou]/gi);
    console.log(vowels.length);
}

const str = 'Cesar Roberto Encinas Realivazquez'; // 14
countVowels(str);