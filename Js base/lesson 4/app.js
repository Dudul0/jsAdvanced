//Задание  1
// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }


//Задание 2
// function printNumbers(num) {
//   for  (let i = 0; i <= num; i++){
//     console.log(i*2)
//   }
// }


//Задание 3
// function printNumbersAdvabced(num1, num2) {
//   for  (let i = num1; i <= num2; i++){
//     console.log(i * 2)
//   }
// }

//Задание 4
// function printNumbersAdvabced(num1, num2) {
//   for  (let i = num1; i <= num2; i++){
//     console.log(i ** 2 * 2)
//   }
// }

//Задание 5
// function oneToTen(num1, num2) {
//   for  (let i = num1; i <= num2; i++){
//     if (i % 2 === 0) console.log(i)

//   }
// }
// oneToTen(1, 10)


//Задание 6
// function oneToHundred(num) {
//   let res = 0
//   for  (let i = 1; i <= num; i++){
//     res = res + i
//   }
//   console.log(res)
// }
// oneToHundred(100)


//Задание 7
// function oneToHundredGaos(num){
//   console.log(num * (num + 1) / 2)
// }
// oneToHundredGaos(100)

//Задагние 8
function fact(num) {
  let res = 1
  for  (let i = num; i != 0; i--){
    res = res * i
  }
  console.log(res)
}
fact(5)