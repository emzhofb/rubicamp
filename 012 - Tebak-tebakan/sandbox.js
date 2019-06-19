const fs = require('fs');
const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan: '
});

process.argv.forEach((val, index) => {
  if (index === 2) {
    const file = fs.readFileSync(val);
    const data = JSON.parse(file);

    console.log(
      `Selamat datang di permainan Tebak-tebakan, kamu akan di berikan pertanyaan dari file ini '${val}'
Untuk bermain, jawablah dengan jawaban yang sesuai.
Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan di tanyakan lagi.
`
    );

    const arrFromJson = [...data];
    let count = 0;
    let wrong = 0;

    console.log(`Pertanyaan: ${arrFromJson[count].definition}`);
    rl.prompt();

    rl.on('line', line => {
      if (line.toLowerCase() !== 'skip') {
        if (count < arrFromJson.length - 1) {
          if (line.toLowerCase() !== arrFromJson[count].term) {
            wrong++;
            console.log(
              `Wkwkwk, Anda kurang beruntung! Anda telah salah ${wrong}, silakan coba lagi. \n`
            );
            rl.prompt();
          } else {
            count++;
            console.log('Selamat Anda benar!\n');
            wrong = 0;
            console.log(`Pertanyaan: ${arrFromJson[count].definition}`);
            rl.prompt();
          }
        } else {
          if (line.toLowerCase() !== arrFromJson[count].term) {
            wrong++;
            console.log(
              `Wkwkwk, Anda kurang beruntung! Anda telah salah ${wrong}, silakan coba lagi. \n`
              );
            rl.prompt();
          } else {
            console.log('Selamat Anda benar!\n');
            console.log('Hore Anda Menang!');
            process.exit(0);
          }
        }
      } else {
        console.log('skipped');
        process.exit(0);
      }
    });
  }
});
