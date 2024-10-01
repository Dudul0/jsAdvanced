// class Monster {
//     constructor(name, habitants, dangerRate, prevalenceRate, eats, speakAbility, intelligence, agressive){
//         this.name = name
//         this.habitants =  habitants
//         this.eats = eats
//         this.prevalenceRate = prevalenceRate 
//         this.dangerRate = dangerRate 
//         this.agressive = agressive  
//         this.intelligence = intelligence  
//         this.speakAbility = speakAbility
//     }
//     atack(){
//         console.log('атакует')
//     }
//     eat(){
//         console.log('кушает')
//     }
//     walk(){
//         console.log('ходит')
//     }  
//     atack(){
//         console.log('атакует')
//     }
// }
// monster_1 = new Monster('efg нечесть',['Заброшенный крематорий, сточные канавы, болото, заьрошенные катакомбы'], 2, 5, ['Люди, мелкие грызуны'], false, false, true   )
// console.log(monster_1)
// monster_1.atack()


// Задание 2
// class Address {
//     country
//     city
//     street
//     house
//     apartmentNumber
//     index 
//     get country(){
//         return this.country;
//     }
//     get city(){
//         return this.city;
//     }
//     get street(){
//         return this.street;
//     }
//     get house(){
//         return this.house;
//     }
//     get apartmentNumber(){
//         return this.apartmentNumber;
//     }
//     get index(){
//         return this.index;
//     }
//     set country(country){
//         return this.country = country;
//     }
//     set city(city){
//         return this.city = city;
//     }
//     set street(street){
//         return this.street = street;
//     }
//     set house(house){
//         return this.house = house;
//     }
//     set apartmentNumber(apartmentNumber){
//         return this.apartmentNumber = apartmentNumber;
//     }
//     set index(index){
//         return this.index = index;
//     }

//     printData(){
//         console.log(`Main iformation:
//     Country:${this.country}
//     City:${this.city}
//     Street:${this.street}
//     House:${this.house}
//     Apartment number:${this.apartmentNumber}
//     Index:${this.index}`)
//     }
// }
// const address_1 = new Address()
// address_1.country = 'Turkmenistan'
// address_1.city = 'Ashgabat'
// address_1.street = 'B.T.Turkmenistan S'
// address_1.house = '№43'
// address_1.apartmentNumber = '345'
// address_1.index = '2342'
// address_1.printData()




// //Задание 3
// class Cat {
//     name 
//     age
//     woolColor
//     eyeColor
//     get name(){
//         return this.name;
//     }
//     get age(){
//         return this.age;
//     }
//     get woolColor(){
//         return this.woolColoror;
//     }
//     get eteColor(){
//         return this.eteColor;
//     }


//     set name(name){
//         return this.name = name;
//     }
//     set age(age){
//         return this.age = age
//     }
//     set woolColor(woolColor){
//         return this.woolColor = woolColor
//     }
//     set eteColor(eteColor){
//         return this.eteColor = eteColor
//     }
//     sayMeow(num){
//        while(num > 0){
//         console.log('meow')
//         num --
//        }
//     }
// }
// let cat_1 = new Cat
// cat_1.name = 'Murzik'
// cat_1.age = 4
// cat_1.woolColor = 'black'
// cat_1.eyeColor = 'gray'
// cat_1.sayMeow(3)
// console.log(cat_1)




// Задание 5
class User {
    constructor(firstName, lastname, email) {
        this.firstname = firstName
        this.lastName = lastname
        this.email = email
    }
}

const users = []

function addUser() {
    const firstName = prompt("Введите имя")
    const lastname = prompt("Введите фамилию")
    const email = prompt("Введите почту")
    const user = new User(firstName, lastname, email)
    if (validEmail(email) && validName (firstName) && validLastname (lastname)) {
        users.push(user)
    } else {
        console.log('ty che durak')
}

}
function validEmail(email) {
    const verifyEmail = /^[a-z A-Z 0-9 ._-]+@[a-z A-Z 0-9 .]+\.[a-z A-Z]{2,6}$/;
    return verifyEmail.test(email);
}
function validName(name) {
    const verifyEmail = /^[a-z A-Z]/;
    return verifyEmail.test(name);
}
function validLastname(lastname) {
    const verifyEmail = /^[a-z A-Z]/;
    return verifyEmail.test(lastname);
}
addUser()
console.log(users)

// Задание 6
// class Triangle {
//     _a
//     _b
//     _c
    // set _firstSide(firstSide){
    //     return this._firstSide = firstSide
    // }
    // set secondSide(secondSide){
    //     return this._secondSide = secondSide
    // }
    // set _thirdSide(thirdSide){
    //     return this._thirdSide = thirdSide
    // }
//     get _firstSide(){
//         return this._firstSide
//     }
//     get secondSide(){
//         return this._secondSide
//     }
//     get _thirdSide(){
//         return this._thirdSide
//     }
//     squareCalculator (){
//         const halfPerimeter = this.perimetrCalculator() / 2
//         return Math.sqrt(halfPerimeter * (halfPerimeter - this._a) * (halfPerimeter - this._b) * (halfPerimeter - this._c))
//     }
//     perimetrCalculator(){
//         return  (this._a + this._b + this._c)
//     }
//     printResults(){
//         console.log(`${this.squareCalculator()}m2 is area of triangle and ${this.perimetrCalculator()}cm is perimetr of triangle`)
//     }
// }

// let triangle_1 = new Triangle()
// triangle_1._a = 10
// triangle_1._b = 8
// triangle_1._c = 6
// triangle_1.printResults()


//задание 4
// const now = new Date()
// class BankAcount {
//     openYear
//     percent 
//     invoice
//     set openYear(openYear){
//         return this.openYear = openYear
//     }
//     set percent(percent){
//         return this.percent = percent
//     }
//     set invoice(invoice){
//         return this.invoice = invoice
//     }
//     daysSinceOpening(){
//         return (now.getFullYear() - this.openYear) * 360
//     }
//     printDaysInfo(){
//         console.log(this.daysSinceOpening())
//     }
//     perentCalculate(years){
//         return this.invoice * (1 + this.percent / 100) ** years
//     }
//     printPercentInfo(years){
//         console.log(this.perentCalculate(years))
//     }
// }
// const account = new BankAcount
// account.openYear = 2023
// account.percent = 6
// account.invoice = 100
// account.printDaysInfo()
// account.printPercentInfo(3)