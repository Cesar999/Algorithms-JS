function strPerm(str1, str2){
    const res = str1.split('').sort().join('') === str2.split('').sort().join('');
    console.log(res);
    return res;
}

const str1 = `abcdef`;
const str2 = `dcbafe`;
strPerm(str1, str2);

const str3 = `abcdef`;
const str4 = `dcbage`;
strPerm(str3, str4);