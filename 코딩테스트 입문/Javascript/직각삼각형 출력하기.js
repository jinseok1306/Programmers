const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let N = Number(input[0]);
    let answer = [];
    let star = '*';
    
    for(let i=1; i<=N; i++){
        answer.push(star.repeat(i));
    }
    
    console.log(answer.join('\n'));
});