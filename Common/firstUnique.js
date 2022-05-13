
function firstUnique(arr){
    const map = new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }

    for(let item of map){
        const [key, value] = item;
        if(value === 1){
            return key;
        }
    }

    return null;
}

firstUnique("sportsbasement");
firstUnique("aabbccddffgghh");
firstUnique("cesarrobertoencinasrealivazquez");