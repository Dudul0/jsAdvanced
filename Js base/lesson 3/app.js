// let a = 15
// while (a < 10) {
//     console.log(a)
//     a++
// }
// for(let i = 1; i <= 12; i++){
//     console.log(`Я учусь в ${i} классе`)
// }
// do{
//     console.log('It works')
// }while(a <= 10)


//Задание 1
// let num = 1
// while (num <= 20){
//     console.log(num)
//     num++
// } 


//Задание 2
// let num = 1
// while (num <= 20){
//     console.log(num*2)
//     num++
// } 


//Задание 3
// let num = 1
// while (num <= 20){
//     console.log(num ** 2 * 2)
//     num++
// } 

//Задание 5

// while (true) {
//     let num = prompt('Введите число')
//     if (num == 0) break
//     alert(num ** 2)

// }

//Задание 6
document.getElementById('list').textContent = 
'1.Капучино – эспрессо со вспененным молоком 32tmt 2.Латте – международный напиток из эспрессо со вспененным молоком. В 240 мл стакан добавляют шот эспрессо, который заливают молоком с молочной пенкой 25tmt 3.Раф – Порция эспрессо со взбитыми паром сливками 30tmt 4.Эспрессо (также Normale) – напиток приготовленный с помощью рожковой эспрессо-машины. 20tmt 5.Американо – эспрессо обычный или двойной, в который после приготовления добавили (30–470 мл) горячей воды. 15tmt';

let coffe = prompt('Введите название или номер нужного вам кофе');
let amount = prompt('Также введите количество порций');
let totalPrice = 0;
let promo;

function promoCalc(discount) {
    console.log(`${coffe + totalPrice * (1 - discount / 100)} tmt`);
}
function setCoffe(coffeType) {
    coffe = coffeType
}
function getTotalPrice(price) {
    totalPrice = price * amount;
}
function switchCheck(checkTarget, case_1, case_2, case_3, case_4, case_5, param_1, param_2, param_3, param_4, param_5, action) {
    switch (checkTarget) {
        case case_1:
            console.log(param_1)
            action(param_1)
            break;
        case case_2:
            action(param_2)
            break;
        case case_3:
            action(param_3)
            break;
        case case_4:
            action(param_4)
            break;
        case case_5:
            action(param_5)
            break;
    }
}
if (coffe == 1 || coffe == 2 || coffe == 3 || coffe == 4 || coffe == 5 || 
    coffe == 'Капучино' || coffe == 'Латте' || coffe == 'Раф' || coffe == 'Эспрессо' || coffe == 'Американо') {
    
    if (amount > 0) {
        switchCheck(coffe, '1', '2', '3', '4', '5', 'Капучино ', 'Латте ', 'Раф ', 'Эспрессо ', 'Американо ', setCoffe)
        switchCheck(coffe,'Капучино ', 'Латте ', 'Раф ', 'Эспрессо ', 'Американо ', 32, 25, 30, 20, 15, getTotalPrice)

        // switch (coffe) {
        //     case '1':
        //         coffe = 'Капучино ';
        //         break;
        //     case '2':
        //         coffe = 'Латте ';
        //         break;
        //     case '3':
        //         coffe = 'Раф ';
        //         break;
        //     case '4':
        //         coffe = 'Эспрессо ';
        //         break;
        //     case '5':
        //         coffe = 'Американо'; 
        // }

        // switch (coffe) {
        //     case 'Капучино ':
        //         totalPrice = 32 * amount;
        //         break;
        //     case 'Латте ':
        //         totalPrice = 25 * amount;
        //         break;
        //     case 'Раф ':
        //         totalPrice = 30 * amount;
        //         break;
        //     case 'Эспрессо ':
        //         totalPrice = 20 * amount;
        //         break;
        //     case 'Американо ':
        //         totalPrice = 15 * amount;
        // } 

        while (true) {
            promo = +prompt('Введите промо-код');
            
            if (promo === null || promo === 0) {
                console.log(coffe + totalPrice + ' TMT промокод не действителен или не был использован');
                break;
            }

            if (promo == 51 || promo == 52 || promo == 53 || promo == 54 || promo == 55 || promo == 56 || promo == 57 || 
                promo == 58 || promo == 59 || promo == 50) {
                promoCalc(5);
                break;
            } else if (promo == 11 || promo == 12 || promo == 13 || promo == 14 || promo == 15 || 
                       promo == 16 || promo == 17) {
                promoCalc(10);
                break;
            } else if (promo == 151 || promo == 152 || promo == 153 || promo == 154) {
                promoCalc(15);
                break;
            } else if (promo == 21 || promo == 22) {
                promoCalc(20);
                break;
            } else {
                alert('Промо-код введен неправильно. Попробуйте снова.');
            }
        }
    } else {
        console.log('debil');
    }
} else {
    console.log('debbil');
}
