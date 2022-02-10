// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber=(a,b,c)=>{
    if (a<b && a<c){
        console.log(a)
    }else if (b<a && b<c){
        console.log(b)
    }else if(c<a && c<b){
        console.log(c)
    }else{console.log('введіть три різних числа')}
}
minNumber(5,8,-7)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber=(a,b,c)=> {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}
maxNumber(18,8,4)
// - створити функцію яка повертає найбільше число з масиву
let numbers=[2,7,5,-34,98,23,5,67,8]
let maxNumOfArr=(arr)=>{
    let max=arr[0]
    for (let arrElement of arr) {
        if(arrElement>max){
            max=arrElement
        }
    }
    return max
}
console.log(maxNumOfArr(numbers))
// - створити функцію яка повертає найменьше число з масиву
let minNumOfArr=(arr)=> {
    let min=arr[0]
    for (let arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    return min
}
console.log(minNumOfArr(numbers))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArr=(arr)=>{
    let sum=0
    for (let arrElement of arr) {
        sum=sum+arrElement
    }
    return sum
}
console.log(sumOfArr(numbers))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let middleSizeOfArr=(arr)=>{
    let sum=0
    for (let i=0;i<arr.length;i++) {
      sum=sum+arr[i]
    }
    return parseInt(sum/arr.length)
}
console.log(middleSizeOfArr(numbers))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrayMinMaxFilter=(arr)=>{
    let min=arr[0]
    let max=arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i]<min) {
          min=arr[i]
      }else if(arr[i]>max){
          max=arr[i]
      }
    }console.log('найбільше:'+max)
    return min
}
console.log('найменше:'+arrayMinMaxFilter(numbers))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
 let arrRand=[]
// let arrRandCreator=(number) => {
//     for (let i = 0; i < number; i++) {
//         arrRand.push(Math.round(Math.random()*100))
//
//     }
//     console.log(arrRand)
// }
// arrRandCreator(10)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let arrRandCreator=(number) => {
    for (let i = 0; i < number; i++) {
        arrRand.push(getRandomInt(0,50))

    }
    console.log(arrRand)
}
arrRandCreator(10)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let newArray=[]
let reverseArray=(arr)=>{
    for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i])
    }
    console.log(newArray)
}
reverseArray(numbers)
