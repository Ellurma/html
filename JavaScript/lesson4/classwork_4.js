// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a,b,c) {
    if (a < b && a < c){ console.log(a) }
    else if (b < a && b < c){
        console.log(b)
    } else if (c<a && c<b) {
        console.log(c)
    }
    else {
        console.log('введіть числа з різними значеннями')
    }
}
minNumber(2,1,9)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a,b,c) {
    if (a > b && a > c){ console.log(a)}
    else if (b > a && b > c){console.log(b)}
    else if (c>a && c>b) {console.log(c)}
    else {console.log('введіть числа з різними значеннями')
    }
}
maxNumber(2,1,9)
// - створити функцію яка повертає найбільше число з масиву
let numbers=[1,3,600,4,67,23,78,23]
function maxNumArray (arr){
    let max=arr[0]
    for (let arrElement of arr) {
        if (arrElement>max){
            max=arrElement
        }
    }
     return max
}
let result=maxNumArray (numbers)
console.log(result)
// - створити функцію яка повертає найменьше число з масиву
function minNumberOfArray(arr) {
    let min=arr[0]
    for (let arrElement of arr) {
        if (arrElement<min){
            min=arrElement
        }
    }
    return min
}
let resultMin=minNumberOfArray(numbers)
console.log(resultMin)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumNumbers(arr) {
    let sum=arr[0]
    for (let arrElement of arr) {
        sum=sum+arrElement
    }
    return sum
}
let sumResult=sumNumbers(numbers)
console.log(sumResult)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let x=0
function middleSize(arr) {
    for (let i = 0; i < arr.length; i++) {
        x = x + arr[i]
    }
    ms = x /arr.length
    return ms
}
let msResult=middleSize(numbers)
console.log(msResult)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function returnMinLogMax(arr) {
    let min=arr[0]
    let max=arr[0]
    for (let arrElement of arr) {
        if (min>arrElement){min=arrElement}
        else if (max<arrElement){max=arrElement}
    }
    console.log(max)
    return min
}
let minResult=returnMinLogMax(numbers)
console.log(minResult)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrRandom=[]
// function numRandom(arr, number) {
//     for (let i = 0; i < number; i++) {
//         arrRandom.push(Math.round(Math.random()*100))
//     }
//     return arrRandom
// }
// console.log(numRandom(arrRandom, 10))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function numRandom1(arr, number) {
    for (let i = 0; i < number; i++) {
        arrRandom.push(getRandomInt(0, 100))
    }
    return arrRandom
}
console.log(numRandom1(arrRandom, 15))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrNumbers=[1,2,3]
let numbersArr=[]
function abcCba(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        numbersArr.push(arr[i])
    }
    return numbersArr
}
console.log(abcCba(arrNumbers))

