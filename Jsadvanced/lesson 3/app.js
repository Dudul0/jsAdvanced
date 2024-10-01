// const greetings = 
//    {'english': "Welcome",
//    'czech': "Vitejte",
//    'danish':"Velkomst",
//    'dutch':"Welkom",
//    'estonian':"Tere tulemast",
//    'finnish':"Tervetuloa",
//    'flemish':"Welgekomen",
//    'french':"Bienvenue",
//    'german':"Willkommen",
//    'irish':"Failte",
//    'italian':"Benvenuto",
//    'latvian':"Gaidits",
//    'lithuanian':"Laukiamas",
//    'polish':"Witamy",
//    'spanish':"Bienvenido",
//    'swedish': "Valkommen",
//    'welsh': "Croeso"}
// const welcome = (language) => {
//     return greetings[language] ? greetings[language] :   'welcome';
// }
// console.log(welcome('polish'))


// 1
// const block = document.getElementById('block');
// const changeColor = color => {  
//     block.style.background = color;
//     alert(color);
// }


// 2
// const paragraph = document.getElementById('text');
// const changeColor = () => {  
//     const style = paragraph.style
//     style.color === 'black' ? style.color = 'red' : style.color = 'black'

// }

// 3
// const paragraph = document.querySelectorAll('.example');
// const changeColor = function(){
//     paragraph.forEach(element => {
//         element.style.color = 'blue';
//     })
// }


// 4
// const block = document.getElementById('block');
// if (block.tagName === 'DIV') {
//     console.log('Является элементом div');
// } else {
//     console.log('Не является элементом div');



// 5
// const paragraph = document.getElementById('text');

// const changeStyle = function(){
//     const style = paragraph.style
//     style.color = 'red';
//     style.borderColor = 'red'
//     style.borderWidth = '5px'
//     style.borderStyle = 'dotted'
//     style.padding = '20px'
// }


// 6
// const paragraph = document.getElementById('text')
// const colors = ['red', 'blue', 'green', 'black', 'brown']
// let colorIdex = 0
// function changecolor(){ 
//     if (colorIdex < colors.length){
//         paragraph.style.border = `solid 5px ${colors[colorIdex]} `
//         colorIdex++
//     }
//     else colorIdex = 0

// }
// setInterval(changecolor, 3000)



// 8
// function moveHero(currentPosition, roll) {
//     return currentPosition + (roll * 2);
// }

// const currentPosition = 0
// const roll = Math.round( Math.random() * (6 - 1) + 1);
// const newPosition = moveHero(currentPosition, roll)
// console.log(`Новое положение героя: ${newPosition}`)



let numbers = [34, 45, 654, 243, 45]
 // Создаю массив 
const comporator = (a, b) => a - b  
//функция которая возвращает результат a - b
const swap = (arr, i, j) => { 
    //функция принемает массив и значения  х и у
    const swapper = arr[i]
     //создаю константу и присваюваю ей значение x
    arr[i] = arr[j] 
    //после присваеваю x значение y
    arr[j] = swapper 
    //а y значение x
 }

 const bublesortautomatic = arr => { 
    // создаю автоматический сортировщик
    for (let j = arr.length - 1; j > 0 ; j--) { 
        // первый цикл который сохраняет последнее число, и не трогает его
        for (let i = 0; j > i; i++) {
             // второй цикл который перебирает массив от меньшего к большему, и заверштся только тогда когда когда дойдет до последнего числа
           if (comporator(arr[i] - arr[i + 1]) > 0) swap(arr, i, i +1)
            // условие: если x - y > 0, то x = y, а y = x 
        }
    }
 }
 
 const bublesort = arr => {
    // сортировщик - не автоматический
    for (let j = arr.length - 1; j > 0 ; j--) {
         // первый цикл который сохраняет последнее число, и не трогает его    
        for (let i = 0; j > i; i++) {
            // второй цикл который перебирает массив от меньшего к большему, и заверштся только тогда когда когда дойдет до последнего числа
           if (arr[i] - arr[i + 1] > 0){
            // условие: если x - y > 0 то
            const swapper = arr[i]
            //создаю константу и присваюваю ей значение x
            arr[i] = arr[i + 1] 
            //после присваеваю x значение y
            arr[i + 1] = swapper
            //а y значение x
           }
        }
    }
 }
 bublesort(numbers) 
 // вызываю функцию передаю в нее массив с числами
 console.log(numbers)
 //выввод результата в консоль