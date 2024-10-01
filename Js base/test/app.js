//Задание 1

// const num = [2, 4, 3, 5];
// let num2
// let res 
// let number = num.reduce(function(tot, item){
//     return item * tot
// },1)

// console.log(number)


//=====================================================================
// Задание 2-3


// let names = ['Alex', 'Jonh', 'Mathew', 'Harry', 'Jack']
// let surNames = ['John', 'Alex', 'Harry', 'Jack', 'Mathew']+--
// let poins = [34, 78, 93, 81, 64]

// sort = function(name, surName, age){

// }

//=====================================================================
//Задание 4

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let number = num.reduce(function(tot, item){
//     tot = item ** 2 + tot
//     return tot
// },0)
// console.log(number)

//=====================================================================
//Задание 5

// function getFactorial(num) {
//   let res = 1
//   for  (let i = num; i != 0; i--){
//     res *= i
//   }
//   return res
// }
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let number = num.reduce(function(tot, item){
//     tot = getFactorial(item) + tot
//     return tot
// },0)
// console.log(number)

//=====================================================================
//Задание 6

// let obj = {
//     Minsk:'Belorus',
//     Moskow:'Russia',
//     Kiev:'Ukrain'
// }
// for (const city in obj) {
//     switch (city){
//         case 'Minsk':
//         console.log(`Minsk is - Belorus`)
//         break
//         case'Moskow':
//         console.log('Moskow is - Russia')
//         case 'Kiev':
//         console.log('Kiev is - Ukrain')
//         break
//     }
// }

//=====================================================================
//Задание 7

// for(let i = 11; i <= 33; i++){
//     console.log(i)
// }

//=====================================================================
//Задание 8

// let res = 0
// for  (let i = 1; i <= 100; i++){
//     res = res + i
// }
// console.log(res)

//====================================================================
//Задание 10

const clients = [
    {
        name: 'Artemiy',
        age: 29,
        sales: 1300
    },
    {
        name: 'Aylara',
        age: 24,
        sales: 1478
    },
    {
        name: 'Sergey',
        age: 30,
        sales: 1152
    },
    {
        name: 'Mahmud',
        age: 21,
        sales: 1320
    },
    {
        name: 'Selbi',
        age: 19,
        sales: 700
    },
]


clients.sort(function(client1, client2) {
    return client2.sales - client1.sales  
})
console.log(clients)