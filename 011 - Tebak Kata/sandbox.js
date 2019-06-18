const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('./data.json');
const data = JSON.parse(file);

// console.log(data);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Jawaban: `
});

console.log(
  'Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!'
);

let ask = data[0].definition;
console.log(`Pertanyaan: ${ask}`);
let answer = data[0].term;

rl.prompt();

rl.on('line', line => {
  if (line.toLowerCase() !== answer) rl.prompt();
  else {
    console.log('Hore anda menang!');
    process.exit(0);
  }

  rl.prompt();
});
