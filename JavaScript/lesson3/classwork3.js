// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let numbers=[2,17,13,6,22,31,45,66,100,-18]
    // 1. перебрати його циклом while
// let i=0
// while (i<numbers.length){
//     console.log(numbers[i])
//     i++
// }
//     2. перебрати його циклом for
// for (let j = 0; j < numbers.length; j++) {
//     const number = numbers[j];
//     console.log(number)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=1
// while (i<numbers.length){
//     console.log(numbers[i])
//     i+=2
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < numbers.length; j++) {
//     if (j % 2 === 1) {
//         const number = numbers[j];
//         console.log(number)
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i=0
while (i<numbers.length) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])}
        i++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let j = 0; j < numbers.length; j++) {
//         const number = numbers[j];
//         if ( number% 2 === 0) {
//         console.log(number)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let j = 0; j < numbers.length; j++) {
//     let number = numbers[j];
//     if ( number%3 === 0) {
//         number='okten'
//         console.log(number)
//     }
// }
// 8. вивести масив в зворотньому порядку.
for (let j = numbers.length - 1; j >= 0; j--) {
    let number = numbers[j];
    console.log(number)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)