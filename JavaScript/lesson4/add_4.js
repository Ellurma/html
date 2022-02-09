// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function nameFunc() {
        if (arguments.length===2){
        console.log(arguments[0]+arguments[1])
        } else {console.log(arguments[0])
        }
}
nameFunc('hgbjh')
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let num1=[1,2,3,4]
let num2=[2,3,4,5]
function arraySum(arr1,arr2){
    let arrsum=[]
    for (let i = 0; i < arr1.length; i++) {
        arrsum.push(arr1[i]+arr2[i])
    }
    return arrsum
}
let res = arraySum(num1,num2);
console.log(res)
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let person=[{name: 'Dima', age: 13}, {model: 'Camry'}]
// function indexLog(arr) {
//     let indexArr=[]
//     for (let arrElement of arr) {
//     for (let arrKey in arrElement) {
//         console.log(arrKey)
//     }
//     }
// }
// indexLog(person)
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let person=[{name: 'Dima', age: 13}, {model: 'Camry'}]
function indexLog(arr) {
    let indexArr=[]
    for (let arrElement of arr) {
        for (let arrKey in arrElement) {
            console.log(arrElement[arrKey])
        }
    }
}
indexLog(person)