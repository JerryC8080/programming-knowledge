const _ = require('lodash');
const { unsort } = require('./test-case');
const { bubble, optimizeBubble } = require('./bubble');
const select = require('./select');

function run(sortFun){
    const title = `----- ${sortFun.name} sorting -----`;
    const end = new Array(title.length).fill('-').join('');
    console.log(title);
    _.cloneDeep(unsort).map(testCase => {
        const _testCase = [...testCase];
        const [sorted, step] = sortFun(testCase);
        console.log({ testCase: _testCase, sorted, step });
    });
    console.log(end);
    console.log();
}

run(bubble);
run(optimizeBubble);
run(select);