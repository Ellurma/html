// - Дано натуральное число n. Выведите все числа от 1 до n.
// let nStopArr=(n)=>{
//     let numbers=[]
//     for (let i = 1; i <= n; i++) {
//       numbers.push(i)
//     }
//     console.log(numbers)
// }
// nStopArr(19)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
// let abArray=(a,b)=>{
//     let numbers=[]
//         if (a > b) {
//             for (let i = a; i >= b; i--) {
//                 numbers.push(i)
//             }console.log(numbers)
//         }
//         else {for (let i = a; i <= b; i++) {
//             numbers.push(i)
//             }console.log(numbers)
//         }
//     }
// abArray(2,20)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo=[9,8,0,4]
// let xxx
// let arrAndNumber=(arr, number)=> {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === number) {
//             xxx=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=xxx
//         }
//     }console.log(foo)
// }
//     arrAndNumber(foo, 1)
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
