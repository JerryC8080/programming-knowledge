/**
 * 选择排序
 * 基本步骤：
 * 1. 待排序数据分区：已排序、未排序
 * 2. 从未排序分区开始遍历，找出最小的数，放到已排序分区的末尾。
 * 3. 继续从已排序分区末尾开始，寻找最小的数，直到未排序分区遍历完。
 */

const { unsort } = require('./test-case');

function select(testCase) {
    if (!testCase || testCase.length <= 1) return testCase;
    let step = 0;

    for (let sortedFailP = 0; sortedFailP < testCase.length; sortedFailP++) {
        let min = sortedFailP;

        for (let cursor = sortedFailP + 1; cursor < testCase.length; cursor++) {
            step++;
            if (testCase[cursor] < testCase[min]) min = cursor;
        }

        if (min !== sortedFailP) {
            let temp = testCase[sortedFailP];
            testCase[sortedFailP] = testCase[min];
            testCase[min] = temp;
        }
    }


    return [testCase, step];
}

console.log(unsort);
console.log(unsort.map(testCase => select(testCase)));
