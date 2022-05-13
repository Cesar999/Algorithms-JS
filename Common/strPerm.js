function strPerm(str1, str2){
    const sort1 = str1.split('').sort().join('');
    const sort2 = str2.split('').sort().join('');
    const res = sort1 === sort2;
    console.log(res);
    return res;
}

const str1 = `abcdef`;
const str2 = `dcbafe`;
strPerm(str1, str2); // true

const str3 = `abcdef`;
const str4 = `dcbage`;
strPerm(str3, str4); // false
