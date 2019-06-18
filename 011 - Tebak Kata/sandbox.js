const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('./data.json');
const data = JSON.parse(file);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan: '
});

console.log(
  'Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!'
);

let count = 0;
let ask = data[count].definition;
let answer = data[count].term;

console.log(`Pertanyaan: ${ask}`);

rl.prompt();

rl.on('line', line => {
  if (line.toLowerCase() !== answer) {
    console.log('Wkwkwk, Anda kurang beruntung!\n');
    rl.prompt();
  } else {
    // console.log(count);
    console.log('Selamat Anda benar!\n');
    count++;
    console.log(`Pertanyaan: ${ask}`);
    rl.prompt();
  }
});
