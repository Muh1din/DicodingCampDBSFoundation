/* 
      object merupakan pasangan key dan value dan bukan tipe data primitif, object dapat menyimpan data secara tidak terurut.
      Selain tipe data seperti string, number, symbol, boolean, null, dan undefined dalam JavaScript semuanya dianggap sebagai object.
    
    */


// membuat ocject literals
// const user = {};
// const produts = {name: "Sepatu", price: 230000};

// const user1 = {
//   name: "Dicoding",
//   "last name": "Indonesia",
//   age: 9,
// };

// cara mengakses object dalam js
// menggunakan . (dot) notation
// console.log(user1.name);
// mengakses object dengan . (dot) notation memiliki kekurangan, yaitu tidak bisa mengakses key yang memiliki spsasi.

// menggunakan square bracket
// console.log(user1["last name"]);
// agar bisa mengakses key object yang memiliki spasi kita harus menggunakan square bracket.


// # mengakses dengan object destructuring
// object destructuring adalah cara mengambil properti dari object lalu langsung menyimpannya ke dalam Variabel dengan syntax yang lebih ringkas.

// tanpa destructuring
//  const people = {
//   firstName : 'Jayadi',
//   lastName : 'Cahyono',
//   age : 25
//  }

//  const firstName = people.firstName;
//  const lastName = people.lastName;

//  console.log(firstName);
//  console.log(lastName);

// // dengan destructuring
// const user = {
//   namaDepan : 'Arif',
//   namaBelakang : 'Ferdiansyah',
//   age : 26
// }

// const {namaDepan, namaBelakang} = user;
// console.log(namaDepan, namaBelakang);

// # cara merubah isi object 

// const account = {
//   balance : 1000,
//   debt : 10
// };

// account.balance = 2000;
// console.log(account.balance);

// di sini ada timbul pertanyaan. kenapa nilai const bisa dirubah? kan const tidak bisa dirubah.
// karen const mengunci referensi object bukan mengunci referensi isi dalam object.

// # cara menghapus properti dalam object.
// contoh menggunakan notation . (dot)
const user = {
  firstName : 'Rian',
  lastName : 'Maulana',
  age : 27
};

// const {firstName, lastName, age} = user;
console.log(user);
delete user.age;
console.log(user);

// contoh menghapus menggunakan delete dengan kurung siku Breket Notation.

const mahasiswa = {
  firstName : 'Agung',
  lastName : 'hermawan',
  age : 28
}

delete mahasiswa['age'];
console.log(mahasiswa);

// kenapa saat menghapus delete mahasiswa['age']; kita harus menggunakan tanda kutip? 
// karena di dalam [] itu dianggap sebagai expresi.
// jika tidak menggunakan tanda kutip delete mahasiswa[age] akan error, karena js menganggap age di dalam [] itu variabel bukan expresi.