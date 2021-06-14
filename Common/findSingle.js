
function findSingle(arr){
    const map = {};
    for(let item of arr){
        if(!map[item]){
            map[item] = 1;
        } else {
            map[item] += 1;
        }
    }

    for(let num in map){
        if(map[num]===1){
            console.log(num);
            return num;
        }
    }

    console.log(null);
    return null;

}

findSingle([4,1,2,1,2]);