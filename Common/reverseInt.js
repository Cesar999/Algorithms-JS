// Function that reverses a number

function reverseInt(num) {
    let revNum = 0;
    num = Math.sign(num) * num;

    while(num > 0){
        revNum *= 10;
        revNum += num%10;
        num = Math.floor(num/10);
    }

    console.log(revNum);

}

reverseInt(1234560);
reverseInt(-6543210);