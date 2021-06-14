const {testData, testAlgorithm} = require('./testData');
console.time('javascript Default');
const array0 = testData(100000);
const res0 = array0.sort((a, b) => {
    if(a<b){
        return -1;
    } else {
        return 1;
    }
});
//console.log(res0);
console.timeEnd('javascript Default');
testAlgorithm(res0);