/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const stringNum = x.toString();
    const arrNum = stringNum.split('')
    const copyArray = [...arrNum]
    const revArrNum = copyArray.reverse()
    const revNum = parseInt(revArrNum.join(''))


    return x < 0 ? false : x === revNum ? true : false
};
