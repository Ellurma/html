// --створити масив з:
//     - з 5 числових значень
let arrayNumber=[1,2,3,4,5]
// - з 5 стічкових значень
let arrayString=['apple', 'bananas', 'pear', 'cherry', 'plumb']
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array=['apple', true, false, 25,'bananas']
// console.log(array)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
 let arr = []
 arr[0] = 5
 arr[1] = 15
 arr[2] = 25
 arr[3] = 35
 arr[4] = 45
 console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let array=['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'semtember', 'november']
// for (let arrayElement of array) {
//     document.write(`<div>${arrayElement}</div>`)
//  }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let array=['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'semtember', 'november']
let a=0
for (let arrayElement of array) {
    document.write(`<div>${arrayElement} ${a++}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0
// while (i<20){
//     document.write(`<h1>${'******************'}</h1>`)
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i=0
while (i<20){
    document.write(`<h1>${'******************'} ${i}</h1>`)
    i++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers=[1,2,3,4,5,6,7,8,9,10]
for (let number of numbers) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let letters=['a','b','c','d','e','f','g','h','i','j']
for (const letter of letters) {
    console.log(letter)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let next=['fgf',545,true,'gfvdjkg',4986745,false,5647,'hdfhd',true,'!!!!!']
// for (let nextElement of next) {
//     console.log(nextElement)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (let nextElement of next) {
//     if (typeof nextElement==='boolean' ){
//     console.log(nextElement)
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let nextElement of next) {
//     if (typeof nextElement==='number' ){
//         console.log(nextElement)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let nextElement of next) {
    if (typeof nextElement==='string' ){
        console.log(nextElement)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let theNext=[]
    theNext[0]='fkgjf'
    theNext[1]='jhdkvf'
    theNext[2]=243534
    theNext[3]=354657
    theNext[4]=true
    theNext[5]='%%%%'
    theNext[6]=false
    theNext[7]=4623
    theNext[8]='jvcfkv1234'
    theNext[9]=true
for (let j = 0; j < theNext.length; j++) {
    let theNextElement = theNext[j];
    console.log(theNextElement)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    const theNextElement = theNext[j];
    console.log(j)
    document.write(j)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    const theNextElement = theNext[j];
    console.log(j)
    document.write(j)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j+=2) {
    const theNextElement = theNext[j];
    console.log(j)
    document.write(j)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2===0){
    const theNextElement = theNext[j];
    console.log(j)
    document.write(j)
}
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2===1){
    const theNextElement = theNext[j];
    console.log(j)
    document.write(j)
}
}