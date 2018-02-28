module.exports = function getZerosCount(number, base) {
    var smplNum = [127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
    var divider = base;
    var zeroCount = 0;

    for (var i = 0; i < smplNum.length; i++){
        if(base % smplNum[i] === 0) {
            divider = smplNum[i];
            break;
        }
    }

    var tmpBase = base;
    var zeroDiv = 0;
    while (tmpBase % divider === 0){
        tmpBase /= divider;
        zeroDiv++;
    }

    while (number >= divider) {
        number = Math.trunc(number / divider);
        zeroCount = zeroCount + number;
    }

    return Math.trunc(zeroCount / zeroDiv);
}
