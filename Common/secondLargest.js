function secondLargest(arr){
    let firstMax = 0;
    let secondMax = 0;

    for(let number of arr){
        if(firstMax < number){
            secondMax = firstMax;
            firstMax = number;
        } else if(secondMax < number && number !== firstMax) {
            secondMax = number;
        }
    }

    console.log(secondMax);
}

const array = [4, 2, 5, 6, 6, 7, 6, 7, 1];
secondLargest(array);
