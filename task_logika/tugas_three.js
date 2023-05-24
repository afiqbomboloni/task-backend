const readline = require('readline');

function passwordChecker() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function validatePassword(password) {

    if (password.length < 8 || password.length > 32) {
      console.log('Kata sandi harus memiliki panjang antara 8 dan 32 karakter');
      return false;
    }

    else if (/^\d/.test(password)) {
      console.log('Karakter awal tidak boleh angka');
      return false;
    }

    else if (!/\d/.test(password)) {
      console.log('Kata sandi harus memiliki angka');
      return false;
    }

    else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      console.log('Kata sandi harus memiliki huruf kapital dan huruf kecil');
      return false;
    }
    // Kata sandi valid
    else {
      console.log('Kata sandi valid');
      return true;
    }
  }

  function getPassword() {
    rl.question('Masukkan kata sandi: ', function(password) {
      const isValid = validatePassword(password);
      if (!isValid) {
        getPassword(); // Meminta masukan kembali jika kata sandi tidak valid
      } else {
        rl.close(); // Menutup terminal jika kata sandi valid
      }
    });
  }

  getPassword();
}

passwordChecker();
