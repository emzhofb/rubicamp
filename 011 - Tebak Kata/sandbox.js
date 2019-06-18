const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('./data.json');
const data = JSON.parse(file);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Tebakan: `
});

console.log(
  'Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!'
);

let ask = data[0].definition;
let answer = data[0].term;

console.log(`Pertanyaan: ${ask}`);

rl.prompt();

rl.on('line', line => {
  if (line.toLowerCase() !== answer) {
    console.log('Wkwkwk, Anda kurang beruntung!\n')
    rl.prompt();
  }
  else {
    console.log('Selamat Anda benar!\n');
    process.exit(0);
  }

  rl.prompt();
});
