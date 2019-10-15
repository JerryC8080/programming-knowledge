/**
 * 冒泡算法
 * 1. 原地排序
 * 2. 稳定算法
 * 3. 时间复杂度
 *      最好：一次冒泡，O(n)
 *      最坏：O(n^2)，n 次冒泡
 *      平均：O(n^2)
 */

const { unsort } = require('./test-case');

function bubble(testCase) {
    if (!testCase || testCase.length <= 1) return testCase;


    for (let end = testCase.length - 1; end > 0; end--) {
        for (let i = 0; i <= end; i++) {
            step++;
            if (testCase [i] > testCase [i + 1]) {
                const temp = testCase [i+1];
                testCase [i + 1] = testCase [i];
                testCase [i] = temp;
            }
        }
    }

    return testCase;
}

const sorted = unsort.map(testCase => bubble(testCase));

console.log(unsort);
console.log(sorted);