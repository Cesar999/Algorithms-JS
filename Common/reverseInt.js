// Function that reverses a number

function reverseInt(num) {
    //num = num * Math.sign(num);

    let revNum = 0;
    while(num>0){
        revNum = revNum*10 + num%10;
        num = Math.floor(num/10);
    }
    console.log(revNum);
    return revNum;
}

reverseInt(1234560);