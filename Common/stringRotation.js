function isStrRotation(str1, str2){
    const temp = str1 + str1;
    const res = temp.includes(str2);
    console.log(res);
    return res;
}

const str1 = "cesarencinas"; 
const str2 = "arencinasces";
isStrRotation(str1, str2);

const str3 = "cesarencinas"; 
const str4 = "escesarencin";
isStrRotation(str3, str4);