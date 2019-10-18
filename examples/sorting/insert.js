/**
 * 插入排序
 */

function insert(testCase){
    let step = 0;
    if (!testCase || testCase.length <= 1) return [testCase, step];

    for (let i = 1; i < testCase.length; i++) {
        const curValue = testCase[i];

        for (let j = i - 1; j >= -1; j--) {
            step++;

            // 后移
            if (curValue < testCase[j] ) {
                testCase[j+1] = testCase[j];
            }

            // 插入
            if (j === -1 || curValue >= testCase[j]) {
                testCase[j+1] = curValue;
                break;
            }
        }
    }

    return [testCase, step];
}

module.exports = insert;