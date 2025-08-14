function categorizeNumber(input) {
/**
   * Fungsi untuk mengkategorikan bilangan berdasarkan input
   */

  // 1. Validasi input harus number
if (typeof input !== 'number' || !Number.isInteger(input)) {
    throw new Error("Input harus berupa bilangan bulat");
}

  // 2. Cek jika input adalah 0
if (input === 0) {
    return "Nol";
}

  // 3. Cek jika input negatif
if (input < 0) {
    return "Negatif";
}

  // 4. Cek bilangan prima (hanya untuk bilangan positif > 1)
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

  // 5. Kategorisasi utama
if (isPrime(input)) {
    return "Prima";
} else if (input % 2 === 0) {
    return "Genap";
} else {
    return "Ganjil";
}
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}