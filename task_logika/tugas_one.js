const readline = require('node:readline');

function numberIndexing() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Masukkan nilai N: ', function(n) {
    let index = '';
    let count = 0;

    for (let i = 1; count < n; i++) {
      if (i % 3 === 0 || i % 7 === 0) {
        if (i % 3 === 0 && i % 7 === 0) {
          index += 'Z';
        } else {
          index += i;
        }
        index += ', ';
        count++;
      }
    }
    // delete last comma of index
    index = index.slice(0, -2);

    console.log('Output:', index);

    rl.close();
  });
}

numberIndexing();
