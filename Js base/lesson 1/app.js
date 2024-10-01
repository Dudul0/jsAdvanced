// Задание 1
let yearWage = 4 * 365 
console.log (yearWage)

// Задание 2
console.log ( 4 * 52 )

// Задание 3
console.log (yearWage - 52 * 12 )

// Задание 4
let height = +prompt('heihgt')
let weight = +prompt('weight')
let bmi

if (height <= 0) {console.log('ты даун')
}
else {
    console.log(weight / height**2)
    bmi = weight / height**2
}
if (bmi < 16 ) {
    console.log('Острый дефицит массы')
}
else if (bmi <= 18.5) console.log('Недостаточная масса тела')
else if (bmi <= 25) console.log('Норма')
else if (bmi <= 30) console.log('Избыточная масса тела')
else if (bmi <= 35) console.log('Ожирение первой степени')
else if (bmi <= 40) console.log('Ожирение второй степени')
else console.log('Ожирение третьей степени')

// Задание 4
// let month = + prompt('Месяц')
// if (month < 1){
//     console.log("ты даун")
// }
// else if (month === 1){
//     console.log('Январь')
// }
// else if (month === 2){
//     console.log('Февраль')
// }
// else if (month === 3){
//     console.log('Март')
// }
// else if (month === 4){
//     console.log('Апрель')
// }
// else if (month === 5){
//     console.log('Май')
// }
// else if (month === 6){
//     console.log('Июнь')
// }
// else if (month === 7){
//     console.log('Июль')
// }
// else if (month === 8){
//     console.log('Август')
// }
// else if (month === 9){
//     console.log('Сентябрь')
// }
// else if (month === 10){
//     console.log('Ноябрь')
// }
// else if (month === 11){
//     console.log('Февраль')
// }
// else if (month === 12){
//     console.log('Декабрь')
// }