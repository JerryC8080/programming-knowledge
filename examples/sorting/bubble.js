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
    let step = 0;

    for (let end = testCase.length - 1; end > 0; end--) {
        for (let i = 0; i <= end; i++) {
            step++;
            if (testCase[i] > testCase[i + 1]) {
                const temp = testCase[i + 1];
                testCase[i + 1] = testCase[i];
                testCase[i] = temp;
            }
        }
    }

    return [ testCase, step ];
}

// 当一次冒泡时，无数据交换的时候，则意味着后续的数据有序了，停止整个遍历；
function optimizeBubble(testCase) {
    if (!testCase || testCase.length <= 1) return testCase;

    let step = 0;
    let hasSwap = true;
    for (let end = testCase.length - 1; end > 0 && hasSwap; end--) {
        hasSwap = false;
        for (let i = 0; i <= end; i++) {
            step++;
            if (testCase[i] > testCase[i + 1]) {
                const temp = testCase[i + 1];
                testCase[i + 1] = testCase[i];
                testCase[i] = temp;
                hasSwap = true;
            }
        }
    }

    return [ testCase, step ];
}

console.log(unsort);
console.log(unsort.map(testCase => bubble(testCase)));
console.log(unsort.map(testCase => optimizeBubble(testCase)));

module.exports = {
    bubble,
    optimizeBubble,
}
