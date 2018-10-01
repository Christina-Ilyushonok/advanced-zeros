module.exports = function getressCount(number, base) {
    let simpleNums = [];
    let pow = [];
    let temp = 0;
    let result = [];
    for (let i = 2; i <= base;) {
        if (base % i == 0) {
            temp += 1;
            base = base / i;
            if (simpleNums[simpleNums.length - 1] != i) {
                simpleNums.push(i);
            }
        } else {
            if (temp != 0) pow.push(temp);
            i++;
            temp = 0;
        }
        if (base == 1) {
            pow.push(temp);
        }
    }
    for (let i = 0; i < simpleNums.length; i++) {
        let sum = 0;
        let tempNum = number;
        let step = 1;
        while (tempNum > 0) {
            tempNum = Math.floor(number / Math.pow(simpleNums[i], step));
            sum = sum + tempNum;
            step += 1;
        }
        result.push(sum);
    }
    for (let i = 0; i < result.length; i++) {
        result[i] = Math.floor(result[i] / pow[i]);
    }
    return Math.min.apply(null, result);
}