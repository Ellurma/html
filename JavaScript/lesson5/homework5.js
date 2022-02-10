// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let squareRec=(h,w) => h*w
document.write(`<div> Площа прямокутника- ${squareRec(10, 20)}</div>`)
// - створити функцію яка обчислює та повертає площу кола
const  PI=3.14
let squareCircle=(r) => r*r*PI
console.log(squareCircle(5))
// - створити функцію яка обчислює та повертає площу циліндру
let squareCul=(r,h)=> 2*PI*r*(r+h)
let result=parseInt(squareCul(10, 20))
document.write(`<div> Площа циліндрa- ${result}</div>`)
// - створити функцію яка приймає масив та виводить кожен його елемент
let enterArray=(...arr) => {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}
enterArray(3,6,4,3,6,8,90)
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragrCreator=(a)=> document.write(`<p>${a}</p>`)
paragrCreator('Hello')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator=(a)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listCreator('nice day')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listCreator=(text, number)=>{
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listCreator ('nice day', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array=['fjkdfn',986,95,true,'hjsdfkgh',8695,false]
let arrList=(arr) =>{
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
 }
 arrList(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let person=[
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let userArray=(arr)=> {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
            document.write(`<li>name-${arr[i].name}, age-${arr[i].age}, status-${arr[i].status}</li>`)
        }
        document.write(`</ul>`)
}
userArray(person)