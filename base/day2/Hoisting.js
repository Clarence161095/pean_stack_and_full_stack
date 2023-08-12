const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const temp_1 = await inputFromKeyboard();
  console.log('temp_1', temp_1)
  rl.close();
}

main();

function inputFromKeyboard() {
  return new Promise((resolve) => {
    rl.question('Vui lòng nhập một dòng văn bản: ', (answer) => {
      resolve(answer);
    });
  });
}
