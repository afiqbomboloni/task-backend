const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan array (pisahkan dengan koma): ', (input) => {
  const arr = input.split(',').map(Number);
  const result = missing(arr);
  console.log('Output:', result);
  rl.close();
});

function missing(arr) {
  let minNum = Math.min(...arr.filter(num => num > 0));
  let maxNum = Math.max(...arr.filter(num => num > 0));
  let found = false;

  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      found = true;
      return i; // Mengembalikan bilangan pertama yang ditemukan
    }
  }

  if (!found) {
    return "Tidak ada bilangan cacah yang hilang.";
  }
}

