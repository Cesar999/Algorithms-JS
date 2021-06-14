// /Find the numbers whose digits sum 'num' from 1 to 'limit'

function findSum(num, limit) {
    let n = 0;
    let sum = 0;
    let result = [];
    for(let i=1; i<=limit; i++){
        n = i;
        sum = 0;
        while(n>=1){
            sum += n%10;
            n = Math.floor(n/10);
        }
        if(sum === num){
            result.push(i);
        }
    }
    console.log(result);
    return result;
}

findSum(7, 200);