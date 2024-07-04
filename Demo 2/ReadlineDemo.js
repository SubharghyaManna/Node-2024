const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // stdin
    output: process.stdout
})

let name;

rl.question('Please enter your name: ', (answer) => {
    name = answer;
    rl.close();
});

console.log("Hello " + name);
