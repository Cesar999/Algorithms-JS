
function isStrRotation(str1, str2){
    const boolean = (str1.length&&str2.length)&&(str1+str1).includes(str2);
    console.log(boolean);
    return boolean;
}

const str1 = "cesarencinas"; 
const str2 = "arencinasces";
isStrRotation(str1, str2);

const str3 = "cesarencinas"; 
const str4 = "escesarencin";
isStrRotation(str3, str4);