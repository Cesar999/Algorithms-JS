// write a function that converts roman numbers to integer numbers

function romanToInteger(str){
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    let index = 0;
    while(index<str.length){
        if(ROMAN[str[index]] < ROMAN[str[index+1]]){
            sum += ROMAN[str[index+1]] - ROMAN[str[index]];
            index += 2;
        } else {
            sum += ROMAN[str[index]];
            index++;
        }
    }

    console.log(sum);
    return sum;
}

romanToInteger('MCCXXXIV'); // 1234
romanToInteger('MDCLXVI'); // 1666
romanToInteger('MMCDXLIV'); // 2444
romanToInteger('MMMCMXCIX'); // 3999