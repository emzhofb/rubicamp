const process = require('process');
const fs = require('fs');

// print process.argv
if (process.argv.length < 3) {
  console.log('>>> JS TODO <<<');
  console.log(`
  $ node todo.js <command>
  $ node todo.js list
  $ node todo.js task <task_id>
  $ node todo.js add <task_content>
  $ node todo.js delete <task_id>
  $ node todo.js complete <task_id>
  $ node todo.js uncomplete <task_id>
  $ node todo.js list:outstanding asc|desc
  $ node todo.js list:completed asc|desc
  $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
  $ node todo.js filter:<tag_name>
  `);
} else {
  const command = process.argv[2];
  // console.log(command);
  const tempInput = [];

  for (let i = 3; i < process.argv.length; i++) {
    tempInput.push(process.argv[i]);
  }
  // console.log(tempInput);

  let input = '';

  tempInput.forEach((string, index) => {
    if (index === tempInput.length - 1) input += string;
    else input += `${string} `;
  });
  // console.log(input);

  let writeData;
  let id;
  let file;
  let readData;
  
  if (fs.existsSync('data.json')) {
    file = fs.readFileSync('data.json');
    readData = JSON.parse(file);

    writeData = [...readData];
    id = readData.length;
  } else {
    writeData = [];
    id = 0;
  }

  switch (command) {
    case 'add':
      // console.log('add - jalan');
      id++;
      writeData.push({ id: id, content: input });

      fs.writeFileSync('./data.json', JSON.stringify(writeData));
      console.log(`"${input}" telah di tambahkan`);
      break;
    case 'list':
      // console.log(readData);
      console.log('Daftar Pekerjaan');
      for (let i = 0; i < readData.length; i++) {
        console.log(`${readData[i].id}. [ ] ${readData[i].content}`);
      }
      break;
    case 'delete':
      // console.log(typeof process.argv[3]);
      writeData = [];
      for (let i = 0; i < readData.length; i++) {
        if (readData[i].id != process.argv[3]) {
          // console.log(readData[i]);
          writeData.push(readData[i]);
        } else {
          console.log(`'${readData[i].content}' telah di hapus dari daftar`);
        }
      }
      // console.log(writeData);
      let tempData = [];
      for (let i = 0; i < writeData.length; i++) {
        // console.log(writeData[i].id -= 1);
        writeData[i].id -= 1;
        tempData.push(writeData[i]);
      }
      // console.log(tempData);
      writeData = tempData;
      // console.log(writeData);
      fs.writeFileSync('./data.json', JSON.stringify(writeData));
      break;
    default:
      console.log('Maaf, keyword salah.')
      break;
  }
}
