/**
 * 冒泡算法
 */

const { unsort } = require('./test-case');

function bubble(testCase) {
    if (!testCase || testCase.length <= 1) return testCase;

    for (let end = testCase.length - 1; end > 0; end--) {
        for (let i = 0; i <= end; i++) {
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