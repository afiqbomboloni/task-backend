const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function printPattern(n) {
  if (n % 2 === 0) {
    console.log("Harus bilangan ganjil");
  } else {
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1 || i === n - j - 1) {
          row += 'X';
        } else {
          row += 'O';
        }
      }
      console.log(row);
    }
  }
}

rl.question('Masukkan nilai n: ', (answer) => {
  const n = parseInt(answer);
  if (!isNaN(n) && n % 2 === 1) {
    printPattern(n);
  } else {
    console.log('Harus bilangan ganjil');
  }

  rl.close();
});
