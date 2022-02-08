// - +створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    // let res=a*b
    console.log(a*b)
    return a*b
}
square(10,20)
// - +створити функцію яка обчислює та повертає площу кола з радіусом r
const PI=3.14
function squareOFCircle(r) {
    return PI*r*r
}
console.log(squareOFCircle(5))
// - +створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareOFCylinder(r,h) {
    return PI*r*r*h
}
console.log(squareOFCylinder(5, 7))
// - +створити функцію яка приймає масив та виводить кожен його елемент
let numbers=[12,34,56,78,90]
function fromArray(arr) {
    for (let item of arr) {
       console.log(item)
    }
}
fromArray(numbers)
// - +створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textCreator(){
    document.write(`<p>${arguments[0]}, ${arguments[1]}</p>`)
}
textCreator('good morning', 'have a nice day')
// - +створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreator1() {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${arguments[i]}</li>`)
    }
    document.write(`</ul>`)
}
listCreator1('text', 'text', 'text')
// - ---створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
function listCreator2(text, number){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listCreator2 ('text', 3)
// - +створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreator3(...list) {
    document.write(`<ul>`)
    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`)
    }
    document.write(`<ul>`)
}
listCreator3 (1342, -98394, 'kfdk', 'fd', true, false)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id:0, name: 'vasya', age: 31},
    {id:1, name: 'petya', age: 30},
    {id:2, name: 'kolya', age: 29},
    {id:3, name: 'olya', age: 28},
    {id:4, name: 'max', age: 30}
]
function divCreator(arr) {
    document.write(`<ul>`)
    for (let arrElement of arr) {
            document.write(`<li>${arrElement.id}- ${arrElement.name}, age- ${arrElement.age} </li>`)
    }
    document.write(`<ul>`)
}
divCreator (users)

