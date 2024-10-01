// Спрашиваем у пользователя план продаж
const plan = +prompt('plan')
// У нас есть список продавцов и их продажи
const sellers = [
    {seller: 1000},
    {seller: 3000},
    {seller: 1400},
    {seller: 3200},
    {seller: 4100},
    {seller: 3300},
    {seller: 10000} 
]
//Считаем, сколько всего было продано всеми продавцами

const sales = sellers.reduce((total, currentSeller) => total += currentSeller.seller , 0)
console.log(sales)
// Сортируем продавцов по тому кто больше продал от большего к меньшему
sellers.sort(function(seller1, seller2) {
    return seller2.seller - seller1.seller
})

// Узнаем сколько всего продавцов
const numberOfSellers = sellers.length 

// Показываем  список продавцов
console.log(sellers)

// Теперь узнаём перевыполнили ли мы план и насколько
function overdoneCalc(plan, sales){
    if (sales === plan){
        console.log('')  // Если продажи ровно по плану, то говорим, что бонус 2%
    }
    else if (sales > plan){
        const overdone = Math.abs(plan - sales)  // Если продали больше плана считаем разницу
        const overdonePr = overdone / plan * 100  // Считаем, на сколько процентов перевыполнили план

        // В зависимости от того, на сколько процентов перевыполнили план рассчитываем бонус
        if (overdonePr <= 10) calculateFinances(overdone, 5)
        else if (overdonePr <= 15) calculateFinances(overdone, 7)
        else if (overdonePr <= 30) calculateFinances(overdone, 10)
        else if (overdonePr <= 50) calculateFinances(overdone, 15) 
        else if (overdonePr > 50) calculateFinances(overdone, 30)     
    }
}

// Эта функция считает процент от числа
const calculateFromProcent = (number, percent) => number / 100 * percent

// Функция для подсчета дохода после того, как учтены все бонусы и налоги
const calculateIncome = (overdone, percent, taxPercent) => { 
    const bonus = calculateFromProcent(overdone, percent)  // Считаем, сколько нужно заплатить премий
    const income = sales - (bonus * numberOfSellers)  // Считаем, сколько денег останется после выплаты премии
    const tax = calculateFromProcent(income, taxPercent)  // Считаем налог с оставшихся денег
    const pureIncome = income - tax  // Вычисляем, сколько денег останется после выплаты налогов
    return {
        bonus: bonus * numberOfSellers,  // Сколько всего ушло на бонусы
        income: income,  // Доход до налога
        tax: tax,  // Сколько денег ушло на налоги
        pureIncome: pureIncome  // Чистая прибыль после всех вычетов
    }
}

const printFromObject = obj => { 
    for (const key in obj) {
        console.log(`${key} is ${obj[key]}`)
    }
}

// Функция которая выводит результат
const calculateFinances = (overdone, percent, taxPercent = 25) => { 
    const result = calculateIncome(overdone, percent, taxPercent)  // Считаем все что нужно
    printFromObject(result)  // Выводим результат
}

// Запускаем функцию которая считает
overdoneCalc(plan, sales)
