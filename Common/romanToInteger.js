// write a function that converts roman numbers to integer numbers

function romanToInteger(roman){
    const map = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    let res = 0;
    let prev = 0;
    let current = 0;
    for(let i=0; i<roman.length; i++){
        current = map[roman[i]];

        if(current > prev) {
            res = res - prev + current - prev;
        } else {
            res += current;
        }

        prev = current;
    }

    console.log(res);
}

romanToInteger('MCCXXXIV'); // 1234
romanToInteger('MDCLXVI'); // 1666
romanToInteger('MMCDXLIV'); // 2444
romanToInteger('MMMCMXCIX'); // 3999