/*
rest parameter memungkinkan function menerima parameter dalam bentuk array, sehingga function bisa menerima banyak 
parameter tanpa batas dengan code yang bersih.
*/

// function myFunct(...name){
//     return name.map(n => `name: ${n}`);
// }

// let results = myFunct('Roni', 'Rafli', 'maman', 'cecep', 'jajang');

// results.forEach((result) => console.log(result))

// function myFunct(...name){
//     console.log('name:', name );
// }

// myFunct('Rian', 'Dani', 'Maman', 'Siti');

const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    }
];


function addEmployee(name, email, joinyear){
    employees.push({
        name: name,
        email: email,
        joinYear: joinyear,
    });
    console.log(employees);
}


addEmployee('angga', 'angga@dicoding.com', 2020);
addEmployee('rian', 'rian@dicoding.com', 2021);