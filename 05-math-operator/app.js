const num1 = 100;
const num2 = 50;
let val;

//simple math operator
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // modulus - sisa setelah dibagi

// math object
val = Math.PI;
val = Math.E;
val = Math.round(3.4); // pembulatan > 5 pembulatan ke atas <5 pembulatan  ke bawah
val = Math.ceil(2.7); // pembulatan ke atas
val = Math.floor(4.7); // pembulatan ke bawah
val = Math.sqrt(64); // mencari akar kuadrat
val = Math.abs(-5); // mengubah menjadi nilai absolute (positif)
val = Math.pow(10, 5); // pemangkatan angka
val = Math.min(2, 33, 4, 6, 90, -7); // mencari nilai terendah
val = Math.max(2, 33, 4, 6, 90, -7); // mencari nilai tertinggi
val = Math.random(); //membuat anggka random
val = Math.floor(Math.random() * 50 + 1); // random 0-50

console.log(val);
