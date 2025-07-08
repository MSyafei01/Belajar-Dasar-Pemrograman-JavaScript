    window.alert("Anjayyy Hadir");
    console.log("Selamat datang di halaman latihan web!");
// File: Dicoding/Belajar%20Dasar%20Pemrograman%20JavaScript/js/belajar.js

    const nama = "Baqi";
    const umur = 20;
    const alamat = "DIY";
    const hobi = "Membaca";
    console.log(`Nama: ${nama}`);
    console.log(`Umur: ${umur}`);
    console.log(`Alamat: ${alamat}`);
    console.log(`Hobi: ${hobi}`);

    console.log(`Namaku :${nama}, Sekarang umurku: ${umur}, Hari ini aku tinggal di : ${alamat}, Kini Hobi ku: ${hobi}`);

    console.log(`Hai anjay`);
    console.log(`Belajar JS`);

    const PI = '123654789';
    console.log(PI);

    const PI1 = `qweqweqwe`;
    console.log(PI1);

    const PK = 123;
    let username = 'Dicoding';

    console.log(PK); // output: 123
    console.log(username); //output: Dicoding


    const KK = 1235;
    let KL = `qeqwe`;

    console.log(KK); // output: 1235
    console.log(KL); // output: qeqwe

    let jeneng = `Isi Nama`;

    console.log(`Sebelum gnti`,jeneng); // output: Isi Nama

    jeneng = `bayan`; // Mengubah nilai variabel nama

    console.log(`Setelah gnti`,jeneng); // output: Baqi



// Contoh penggunaan variabel dengan nama yang sama di dalam fungsi berbeda

function printCompanyInfo() {
  const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';

    console.log('Company name:', name);
    console.log('Legal type:', legal);
}

function printEmployeeInfo() {
  const name = 'Baqi'; // <- nama variabel sama
    const division = 'IT';

    console.log('Employee name:', name);
    console.log('Division:', division);
}
printCompanyInfo();
printEmployeeInfo();

// Contoh penggunaan variabel dengan nama yang sama di dalam fungsi berbeda
    // Bisa di ubah jadi bawah ini

    function InfoKantor() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';

    console.log('Nama Kantor:', name);
    console.log('singkatan:', legal);
}

function InfoUser() {
    const name = 'Baqi'; // <- nama variabel sama
    const division = 'IT';

    console.log('Nama user:', name);
    console.log('jabatan:', division);
}
InfoKantor();
InfoUser();


// Konversi Eksplisit
    /* Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena 
    dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer. Berikut adalah beberapa 
    metode umum yang digunakan untuk konversi tipe data secara eksplisit. */

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"


// Mengubah ke Number

const strrNomber = '10';
const strrFloat = '11';
const boohlean = true;

const nomFromString = Number(strrNomber);
const floatFromString = Number(strrFloat);
const nomFromBoolean = Number(boohlean);

console.log(nomFromString); // output: 112288
console.log(floatFromString); // output: 789654
console.log(nomFromBoolean); // output: 1

const CM = '20cm';
const PX = '64px';

const intFromCM = parseInt(CM);
const intFromPX = parseInt(PX);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const cm = '20.55cm';
const px = '64.23px';

const dariCM = parseFloat(cm);
const dariPX = parseFloat(px);

console.log(dariCM); // output: 20.55
console.log(dariPX); // output: 64.23



// Mengubah ke Boolean
const angka = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(angka);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false


// Konversi Implisit

const age = 20;
const message = 'Umurku: ' + age;

console.log(message); // output: Umurku: 20


const StrNumber = '123';
const Result = StrNumber * 5;

console.log(Result); // output: 615
// variabel StrNumber adalah 123, dan bagian bawah terdapat variabel Result dengan string = lalu di masukan 
    // variabel StrNumber (operator * untuk perkalian dan angka 5) maka di hasilkan 615 di code console.log(Result);

const bool = true;
const result = 1 + bool;

console.log(result); // output: 2


// Operator

let usia = 25;

// Unary operator
typeof usia;

// Binary operator
5 + 4;
10 / 2;
usia = 30;

// Ternary operator (conditional operator)
(usia < 18) ? 'You are too young!' : 'Welcome onboard!'; 


// Assignment Operator
        // Digunakan untuk menginisiasi nilai

const Jeneng = 'Dicoding';
let Panggon = 'Bandung';

// Digunakan untuk mengubah nilai
Panggon = 'Jakarta';

// Pembelajaran Penggunaan Function

function converCtoF(suhu) {
    const temperaturF = 9 / 5 * suhu + 32;

    console.log('Hasil konversi:', temperaturF);


    console.log(converCtoF);
}

//Berikut kode lengkap untuk fungsi konversi suhu dari Celcius ke Fahrenheit:
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
    }

    const temperatureInCelsius = 90;

  // Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]

  // Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194

function convertCelsiusToFahrenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
    return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/



function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
return operation(numA, numB);
}

const re = calculate(multiply, 2, 4);
console.log(re);

/* Output:
8
*/


