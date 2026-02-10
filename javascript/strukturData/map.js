/*
map adalah tipe data yang mirip dengan object, yaitu menyimpan data dengan key dan value.
map berfungsi untuk menutupi kekurangan dari object, map dapat memiliki key dengan tipe data apapun.
tidak seperti object yang hanya bisa menyimapn key berupa string.

*/

// # cara membuat map
// const map = new Map();
// console.log(typeof map);

// const productMap = new Map([
//     ['shoes', 500],
//     ['cap', 350],
//     ['jeans', 250]
// ]);

// console.log(productMap);

// # menyimpan data di map menggunakan metode set.
// const map = new Map();
// map.set('name', 'aries');
// map.set('age', 19);

// console.log(map);

// map juga bisa menggunakan number sebagai key nya.

// const map = new Map();
// map.set(1, 'number one');
// console.log(map);

// # mengakses nilai di map menggunakan metode get.
// const map = new Map();
// map.set(1, 'number one');

// let isiMap = map.get(1);
// console.log(isiMap);

// menghapus map menggunakan metode delete.
const users = new Map();
users.set(1, 'joko');
users.set(2, 'yanto');
users.set(3, 'Romli');

users.delete(2);

console.log(users);

