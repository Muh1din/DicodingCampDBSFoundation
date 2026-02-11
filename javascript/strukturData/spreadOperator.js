/*
    operator spread ditandai dengan ... (3 titik). 
    spread merubah array/object dari satu nilai tunggal menjadi element atau properti terpisah.
*/

// const array1 = [1,2,3,4,5];
// console.log(array1); // outputnya [1, 2, 3, 4, 5]

// // jika menggunakan spread operator 
// console.log(...array1); // outputnya 1 2 3 4 5

// // bisa juga untuk merge object 
// const obj1 = { name: 'Dicoding'};
// const obj2 = { lastName: 'Indonesia', address: 'jl. Batik kumeli No 50'}
// const newObj = {...obj1, ...obj2};
// console.log(newObj);

// // bisa juga untuk menyalin object 
// const originalObj = { name: 'Dicoding', age: 9}
// const copyObj = {...originalObj};
// console.log(copyObj);

// # selain di object spread operator juga bisa digunakan pada array.
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const mergArray = [...array1, ...array2];
console.log(mergArray);


// sama seperti pada object, speread operator bisa digunakan untuk menyalin array.
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];
console.log(copy);

// sperad operator pada dasarnya sama seperti menggunakan looping untuk mendapatkan nilai yang ada di dalam
// object maupun array dengan syntax yang lebih simple.