/*

set adalah tipe data yang menyimpan nilai unik atau tidak duplikat.

*/

// # cara membuat set
// const set = new Set();
// console.log(typeof set);

// Set juga dapat dibuat beserta dengan nilainya seperti berikut ini.
// const mySet = new Set([1,2,3]);

// console.log(mySet);

// menyimpan nilai set dengan method add.
// method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set, jika kita 
// menambahkan nilai yang sama, set hanya akan menyimpannya sekali saja. oleh karena itu data di dalam set tidak akan
// terduplikat.
// const set = new Set();

// set.add(1);
// set.add('apple');
// set.add(1);
// set.add('apple');
// console.log(set);

// # cara mengakses set.
// ada beberapa cara untuk mengakses set yaitu sbb.
// 1. menggunakan looping for
const fruits = new Set();
fruits.add('apple');
fruits.add('banana');
fruits.add('grape');
fruits.add('orange');

// for (let fruit of fruits){
//     if(fruit == 'apple'){
//         console.log(number);
//         break;
//     }
// }

// 2. dengan cara for each
// fruits.forEach((fruit) => console.log(fruit));

// # menghapus nilai set
fruits.delete('banana');

fruits.forEach((fruit) => console.log(fruit));

