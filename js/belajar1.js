let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const ubahCkeF_FunctionBiasa = function (temperature) {
  const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = ubahCkeF_FunctionBiasa(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const ubahCkeF_ArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = ubahCkeF_ArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194
// Regular function adalah cara penulisan function yang telah kita gunakan sebelumnya, 
        // sedangkan arrow function adalah cara lain dalam membuat function.


const user = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};

const id = user.id;
const email = user.email;

console.log(id, email);



