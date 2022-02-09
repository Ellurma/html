// 1. Створити пустий масив та :
//     +a. заповнити його 50 парними числами за допомоги циклу.
//     +b. заповнити його 50 непарними числами за допомоги циклу.
//     +c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr=[]
// let a=2
// for (let i = 0; i < 50; i++) {
//    let arrElement = arr[i];
//     arrElement=a
//     a+=2
//     console.log(arrElement)
// }
// let b=1
// for (let i = 0; i < 50; i++) {
//     let arrElement = arr[i];
//     arrElement=b
//     b+=2
//     console.log(arrElement)
// }
// for (let i = 0; i < 20; i++) {
//     const arrElement = arr[i];
//     arrayElement=getRandomInt(8,732)
//     console.log(arrayElement)
// }

// +d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// +2. Вивести за допомогою console.log кожен третій елемен
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let array=[]
// for (let i = 0; i < 20; i++) {
//     let arrayElement = array[i];
//     arrayElement=getRandomInt(8,732)
//     console.log(arrayElement)
// }

// 3. +Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < 20; i++) {
//     let arrayElement = array[i];
//     arrayElement=getRandomInt(8,732)
//     arrayElement%2===0 && i%3===0 ? console.log(arrayElement) : null
// }
// 4. +Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr=[]
// let arr=[783,3843,38956,2894,726,216,2678,9789,9887,987]
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2===0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)
// 5. -Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let numbers=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]


// 6. +Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let price=[100,250,50,168,120,345,188]
// sum=0
// for (let i = 0; i < price.length; i++) {
//     const priceElement = price[i];
//     sum=sum+priceElement
// }
// console.log(sum/price.length)
//
// -7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// +8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrayAny=['hjdsh', 'hdf', 454,true,-588, 7634.3, 23]
let arrayEmpty=[]
for (let arrayAnyElement of arrayAny) {
    if (typeof arrayAnyElement==="number"){
        arrayEmpty.push(arrayAnyElement)
    }
}
console.log(arrayEmpty)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - +Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let nums=[78343,8549085,54943,1293,4095,8546,128,9054,9274,3721]
for (let num of nums) {
    num%2===0 ? console.log(num) : null
}
// - -Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - +Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let letters=[ 'a', 'b', 'c']
// let word=''
// for (let i = 0; i < letters.length; i++) {
//     const letter = letters[i];
//     word=word+letter
// }
// console.log(word)
// - +Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i=0
// while (i<letters.length){
//     word=word+letters[i]
//     i++
// }
// console.log(word)
// - +Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let letters=[ 'a', 'b', 'c']
let word=''
for (let letter of letters) {
    word=word+letter
}
console.log(word)