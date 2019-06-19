const process = require('process');

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
  switch (command) {
    case 'add':
      // console.log('add - jalan');
      break;

    default:
      break;
  }
}
