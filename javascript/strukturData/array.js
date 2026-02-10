/*
 # Array adalah tipe data spesial yang dapat menyimpan banyak nilai yang terurut, perbedaannya dengan objek
   adalah urutan datanya, array mampu menyimpan data terurut sedankan objek tidak terurut.

   array mampu menyimpan tipe data apapun, seperti number object dan juga string. array juga merupakan sebuah object.

*/

// const number = [1,2,3];
// console.log(typeof number);

// # ada 3 cara membuat array.
// 1. menggunakan constructor
// const users = new Array();
// console.log(users);

// 2. menggunakan sintax Array.form
// const foo = Array.from('foo');
// console.log(foo);

// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
// const users = new Array('jhon', 'jane', 'jack', 'jill');
// const customers = Array.from(users);

// console.log(customers);

// 3. menggunakan Array literal
// const fruits = ['apple', 'banana', 'cherry', 'grape'];

// ada dua cara mengakses array.
// 1. menggunakan index
// console.log(fruits[1]);
// menggunakan array destructuring
// const [apple, , , grape] = fruits;
// console.log(apple, grape);

// # cara memanipulasi data array
// 1. menggunakan indexing
// let myArray = [1,2,3,4,5];

// console.log('data sebelum dirubah');
// console.log(myArray[2]);
// console.log(myArray);
// console.log('data sesudah dirubah');
// myArray[2] = 30;
// console.log(myArray[2]);
// console.log(myArray);

// 2. menggunakan method push 
// push adalah metod array yang digunakan untuk menambahkan array pada element terakhir.
// myArray.push(6);
// console.log(myArray);

// # cara menghapus element dan data array.
// let myArray = ['Android', 'Data Science', 'web'];
// delete myArray[1];

// console.log(myArray);
// jika kita menggunakan delete untuk menghapus array, maka kita akan hanya menghapus datanya saja, tidak element-nya.
// lalu bagaimana cara menghapus datanya?.

// myArray.splice(1,1);
// console.log(myArray);

// metod splice membuatuhkan 2 parameter, yang pertama untuk menghapus index dan yang kedua data berapa yang ingin di hapus.
// myArray.splice(1,2);
// console.log(myArray);

// # cara menghapus element pertama pada array.
// myArray.shift();
// console.log(myArray);
// # cara menghapus element terakhir pada array.
// myArray.pop();
// console.log(myArray);

// # metode array yang sering digunakan di js.
// 1. reverse, untuk membalik nilai array 
// let myArray = [1,2,3,4,5,6,7,8,9];
// console.log(myArray);

// myArray.reverse();
// console.log(myArray);

// 2. sort, untuk mengurutkan nilai
let numbers = [8,4,2,6,3,5,1,7];
numbers.sort();
console.log(numbers);

