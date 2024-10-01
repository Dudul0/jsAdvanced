// let arr = [null, 1,  'apple', 34, undefined, 'friut', false, 35, NaN]
// const arrayFilter = arr.filter( function(item) { return item })
// console.log(arrayFilter)


// Задание 2
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.reverse(arr))

// Задание 3
// const arr = [1, 2, 3, 4, 5, 6]
// const arrCoppy = arr.map(function(item, index, arr) {
//   if  (index % 2 && index != 0) {
//     return item * 2
//   } return item
// })
// console.log(arrCoppy)


// Задание 3
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.reverse())


//Задание 4
// const arr = [1, 2, 4, 3, 5, 6]
// console.log(arr.sort())


//Задание 5
// const arr = [1, 2, 4, 3, 5, 6]
// const num = arr.map(function(item) {
//   return item ** 2;
// })
// console.log(num)



//Задание 6
// function getFactorial(num) {
//   let res = 1
//   for  (let i = num; i != 0; i--){
//     res *= i
//   }
//   return res
// }
// const arr = [1, 2, 4, 3, 5, 6];
// const factorials = arr.map(function(item) {
//   return getFactorial(item);
// });
// console.log(factorials);


//Залание 7
// const arr = [1, 2, 4, 3, 5, 6];
// const totalIncom = arr.reduceRight( function(acc, item) { return acc + item }, 0)
// console.log(totalIncom)




//Задание 8
const clients = [
  { name: 'Client A', 
    purchases: [100, 200, 300] },
  { name: 'Client B', 
    purchases: [500, 400, 300] },
  { name: 'Client C', 
    purchases: [700, 200, 100] },
  { name: 'Client D', 
    purchases: [800, 500, 200] },
  { name: 'Client E', 
    purchases: [150, 250, 300] },
  { name: 'Client F', 
    purchases: [1000, 500, 100] },
  { name: 'Client G', 
    purchases: [300, 600, 700] },
  { name: 'Client H', 
    purchases: [200, 400, 800] },
  { name: 'Client I', 
    purchases: [100, 300, 900] },
  { name: 'Client J', 
    purchases: [400, 200, 100] },
  { name: 'Client K', 
    purchases: [150, 200, 350] },
  { name: 'Client L', 
    purchases: [250, 350, 450] },
  { name: 'Client M', 
    purchases: [500, 300, 600] },
  { name: 'Client N', 
    purchases: [100, 200, 300] },
];

function calculateTotalProfit(purchases) {
  return purchases.reduce(function(total, purchase) {
    return total + purchase;
  }, 0);
}

let totalProfit = 0;

const clientProfits = clients.map(function(client) {
  const profit = calculateTotalProfit(client.purchases);
  totalProfit = totalProfit + profit;
  return profit;
});

clientProfits.sort(function(client1, client2) {
  return client2 - client1  
});

const topClients = clientProfits.slice(0, 10);

topClients.forEach(function(profit, ranking) {
  const percentage = ((profit / totalProfit) * 100);
  console.log(`Клиент ${ranking + 1}: ${profit} (${percentage}%)`);
});

console.log(`Общая прибыль: ${totalProfit}`)
