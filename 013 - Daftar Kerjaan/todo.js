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
  $ node todo.js list:outstandingList asc|desc
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
      writeData.push({ id: id, content: `[ ] ${input}` });

      fs.writeFileSync('./data.json', JSON.stringify(writeData));
      console.log(`"${input}" telah di tambahkan`);
      break;

    case 'list':
      // console.log(readData);
      console.log('Daftar Pekerjaan');
      for (let i = 0; i < readData.length; i++) {
        console.log(`${readData[i].id}. ${readData[i].content}`);
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
          let deletedContent = readData[i].content;
          let tempContent = '';

          for (let i = 4; i < deletedContent.length; i++) {
            tempContent += deletedContent[i];
          }

          console.log(`'${tempContent}' telah di hapus dari daftar`);
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

    case 'complete':
      writeData = [];

      for (let i = 0; i < readData.length; i++) {
        if (readData[i].id != process.argv[3]) {
          writeData.push(readData[i]);
        } else {
          let updatedContent = readData[i].content;
          let tempContent = '';

          for (let i = 4; i < updatedContent.length; i++) {
            tempContent += updatedContent[i];
          }

          console.log(`'${tempContent}' telah selesai.`);

          let completedContent = '';

          for (let i = 0; i < updatedContent.length; i++) {
            if (i === 1) completedContent += 'X';
            else completedContent += updatedContent[i];
          }

          // console.log(completedContent);

          readData[i].content = completedContent;
          writeData.push(readData[i]);
        }
      }

      // console.log(writeData);
      fs.writeFileSync('./data.json', JSON.stringify(writeData));
      break;

    case 'uncomplete':
      writeData = [];

      for (let i = 0; i < readData.length; i++) {
        if (readData[i].id != process.argv[3]) {
          writeData.push(readData[i]);
        } else {
          let updatedContent = readData[i].content;
          let tempContent = '';

          for (let i = 4; i < updatedContent.length; i++) {
            tempContent += updatedContent[i];
          }

          console.log(`'${tempContent}' status selesai dibatalkan.`);

          let completedContent = '';

          for (let i = 0; i < updatedContent.length; i++) {
            if (i === 1) completedContent += ' ';
            else completedContent += updatedContent[i];
          }

          // console.log(completedContent);

          readData[i].content = completedContent;
          writeData.push(readData[i]);
        }
      }

      // console.log(writeData);
      fs.writeFileSync('./data.json', JSON.stringify(writeData));
      break;

    case 'list:outstanding':
      const outstandingList = [];

      for (let i = 0; i < readData.length; i++) {
        if (readData[i].content[1] === ' ') {
          outstandingList.push(readData[i]);
        }
      }

      console.log('Daftar Pekerjaan');
      if (process.argv[3] === 'asc') {
        for (let i = 0; i < outstandingList.length; i++) {
          console.log(`${outstandingList[i].id}. ${outstandingList[i].content}`);
        }
      } else if (process.argv[3] === 'desc') {
        for (let i = outstandingList.length - 1; i >= 0; i--) {
          console.log(`${outstandingList[i].id}. ${outstandingList[i].content}`);
        }
      } else {
        console.log('Maaf, gunakan asc atau desc');
      }
      break;

    case 'list:completed':
      const completedList = [];

      for (let i = 0; i < readData.length; i++) {
        if (readData[i].content[1] === 'X') {
          completedList.push(readData[i]);
        }
      }

      console.log('Daftar Pekerjaan');
      if (process.argv[3] === 'asc') {
        for (let i = 0; i < completedList.length; i++) {
          console.log(`${completedList[i].id}. ${completedList[i].content}`);
        }
      } else if (process.argv[3] === 'desc') {
        for (let i = completedList.length - 1; i >= 0; i--) {
          console.log(`${completedList[i].id}. ${completedList[i].content}`);
        }
      } else {
        console.log('Maaf, gunakan asc atau desc');
      }
      break;

    default:
      console.log('Maaf, keyword salah.');
      break;
  }
}
