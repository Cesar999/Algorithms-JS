// /Find the numbers whose digits sum 'num' from 1 to 'limit'

function findSum(num, total) {
    const result = [];
    for(let i=0; i<=num; i++){
        let n = i;
        let sum = 0;
        while(n>0){
            sum += n%10;
            n = Math.floor(n/10);
        }
        if(sum === total){
            result.push(i);
        }
    }
    console.log(result);
    return result;
}

findSum(200, 7);