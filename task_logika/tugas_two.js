const readline = require('readline');

function findKeyword() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Masukkan text: ', function(text) {
    const keyword = ['sang gajah', 'serigala', 'harimau'];
    let result = [];

    keyword.forEach((word) => {
      const regex = new RegExp(word, 'gi');
      const indexingResult = (text.match(regex) || []).length;
      result = result.concat(Array(indexingResult).fill(word));
    });

    const output = result.join(' - ');
    console.log('Output:', output);

    rl.close();
  });
}

findKeyword();
