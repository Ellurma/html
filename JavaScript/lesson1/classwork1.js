// 1. Створити масив з 10 чисел (можна використовувати  Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]
// console.log(result)
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let book1 = {
//     title: "The Lord of the Rings",
//     pages: 546,
//     genre: 'fantasy novel'
// }
// let book2 = {
//     title: "The Hobbit",
//     pages: 476,
//     genre: 'fantasy novel',
//     authors: {
//         author: 'J. R. R. Tolkien',
//         publisher: 'Allen & Unwin'
//     }
// }
// console.log(book1);
// console.log(book2);
let books= {
        book1: {
            title: "The Lord of the Rings",
            pages: 546,
            genre: 'fantasy novel'},
        book2:{
            title: "The Hobbit",
            pages: 678,
            genre: 'fantasy novel',
            authors: ['J. R. R. Tolkien', 'Allen & Unwin']}
    }
console.log(books.book1);
console.log(books.book2)

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let hght=23;
let wdth=10;
let s=hght*wdth;
console.log('Площа прямокутника='+s+'cm')
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC=10;
let dC=4;
const PI=3.14;
let v=PI*dC*heightC;
console.log('Обєм циліндра='+v+' кв m')
// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n=3;
let m=4;
let k2=Math.pow(n,2)+Math.pow(m,2);
let k=Math.sqrt(k2);
console.log('Значення гітопенузи '+k+' cm')