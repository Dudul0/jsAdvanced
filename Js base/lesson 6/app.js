// const cat = {
//   name: 'Dymka',
//   age: 3,
//   hasWool: false,
//   spcies: 'Canadian',
//   sayMeow: function () { console.log('meow') },
//   eat: function () {
//     console.log('started eating')
//     console.log('is eating')
//     console.log('finshed eating')
//   }
// }
// console.log(cat.name)
// cat.sayMeow()
// cat.eat()

//Задание 1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// console.log(salaries.Ann + salaries.John + salaries.Pete)


//Задание 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// for (const num in menu) {
//   if (typeof(menu[num]) === 'number') {
//     console.log(menu[num] * 2)
//   }
// }

//Задание 3
// let calculator = {
//   num_1: 5,
//   num_2: 2,
//   sum: function() {console.log(this.num_1 + this.num_2)},
//   minus: function() {console.log(this.num_1 - this.num_2)},
//   devide: function() {console.log(this.num_1 / this.num_2)},
//   multi: function() {console.log(this.num_1 * this.num_2)},
//   degree: function() {console.log(this.num_1 * this.num_2)}
// }
// calculator.sum()
// calculator.minus()
// calculator.devide()
// calculator.multi()
// calculator.degree()


//Задание 4
// const user = {
//     firstName: 'John',
//     lastName: 'Davidson',
//     age: 25,
//     favoriteColor: 'blue',
//     password: 'fjwioejfwoej',
//     alive: true
// }
// for (const mainInfo in user) {
//     if (mainInfo === 'firstName' || mainInfo === 'lastName' || mainInfo === 'age') console.log(user[mainInfo])
// }


//Задание 5
// function isObject(object) {
//     if (typeof(object) === 'object' && object !== null && Array.isArray(object) != true ) return object
//     else return 'not object'
// }
// console.log(isObject(false))
// console.log(isObject(undefined))
// console.log(isObject(NaN))
// console.log(isObject(null))
// console.log(isObject([1, 2, 3]))
// console.log(isObject({
//     firstName: 'John',
//         lastName: 'Davidson',
//         age: 25,
//         favoriteColor: 'blue',
//         password: 'fjwioejfwoej',
//         alive: true
// }))


//Задание 6
// let search = prompt('program you need')
// const universities = [
//     {
//         name: "Гарвардский университет",
//         ranking: 1,
//         programs: ["Бизнес", "Медицинские науки", "Юриспруденция", "Инженерия"]
//     },
//     {
//         name: "Стэнфордский университет",
//         ranking: 2,
//         programs: ["Компьютерные науки", "Инженерия", "Биомедицинские науки", "Социальные науки"]
//     },
//     {
//         name: "Кембриджский университет",
//         ranking: 3,
//         programs: ["Наука", "Искусство", "Гуманитарные науки", "Экономика"]
//     },
//     {
//         name: "Оксфордский университет",
//         ranking: 4,
//         programs: ["История", "Политология", "Философия", "Науки о жизни"]
//     },
//     {
//         name: "Технический университет Мюнхена",
//         ranking: 5,
//         programs: ["Инженерия", "Информатика", "Науки о Земле", "Экономика"]
//     }
// ];
// // universities.forEach(function(university) {
// //     university.programs.forEach(function(program) {
// //         if (program === search){
// //             console.log(`${university.name} with ${university.ranking} rank has ${search}`)
// //         }
// //     });
// // });
// const filtered = universities.filter( function(item) { return item.programs.includes(search) })
// console.log(filtered)