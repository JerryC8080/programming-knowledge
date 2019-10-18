/**
 * 插入排序
 */

function insert(testCase){
    let step = 0;
    if (!testCase || testCase.length <= 1) return [testCase, step];

    for (let i = 1; i < testCase.length; i++) {
        const sortedFailP = i - 1;
        const curValue = testCase[i];

        // 插入
        // TODO 这里有问题
        for (let j = sortedFailP; j > 0; j--) {
            step++;

            // console.log({j});

            if (curValue <= testCase[j]) {
                // 移动
                testCase[j+1] = testCase[j];
                testCase[j] = curValue;
            } 
        }
    }

    return [testCase, step];
}

module.exports = insert;