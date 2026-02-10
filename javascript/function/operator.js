/*
    operator operator dalam js dibagi menjadi 3.
    - binary
    - unary 
    - ternary 

    binary adalah operator yang membutuhkan 2 operan, contohnya seperti operator aritmatika
    unary adalah operator tipe data yang membutuhkan satu operan saja, contohnya seperti typeOf
    ternary adalah operator yang membutuhkam 3 operan.
*/

// contoh yang menggunakan operator unary
let age = 24;
console.log(age, typeof age);

// opertor binary
let a = 10;
let b = 20;
let y = a + b; // ini adalah contoh operasi operator binary
console.log(y);

// contoh menggunakan operator ternary
let nilai = 90;
let hasil = (nilai > 70) ? "Selamat anda lulus" : "Maaf anda tikak lulus";
console.log(hasil);