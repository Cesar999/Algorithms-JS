
function firstUnique(str){
    const map = {};
    for(let char of str){
        if(!map[char]){
            map[char] = 1;
        } else {
            map[char] += 1;
        }
    }

    for(let i=0; i<str.length; i++){
        const char = str[i];
        if(map[char]===1){
            console.log(char);
            return char;
        }
    }
    
    console.log(null);
    return null;
}

firstUnique("sportsbasement");
firstUnique("aabbccddffgghh");
firstUnique("cesarrobertoencinasrealivazquez");