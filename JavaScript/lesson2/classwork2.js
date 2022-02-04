// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a=+prompt('enter 1 number')
// let b=+prompt('enter 2 number')
// if (a<b){
//     console.log(b)
// }else if (a===b){
//     console.log('numbers are equal')
// }else {
//     console.log(a)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let numberFlat=+prompt('enter flat number')
//     if (numberFlat<=20){
//         document.write('flat is in the 1 entrance')
//     }else if(numberFlat<=48){
//         document.write('flat is in the 2 entrance')
//     }else if(numberFlat<=90) {
//         document.write('flat is in the 3 entrance')
//     } else {
//         document.write('there is no such apartment in the house')
//  }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// if (+prompt('enter number')===10) {
//     console.log(true)
// }else {console.log(false)
// }


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x= {
//     title:'milk',
//     price:34
// }
// if (typeof x==='number'){
//     console.log(1)
// }   else if(typeof x==='string'){
//         console.log(2)
//     }else if(typeof x==='boolean'){
//     console.log(3)
// }else if(typeof x==='object' || typeof x==='array') {
//     console.log(4)
// } else {
//     console.log(5)
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp=+prompt('enter degree ')
// if (temp<10 || temp>22){
//     document.write('stay home, studing online')
// }else {
//     document.write('welcome to Okten')
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// switch (+prompt('enter number from 1 to 5')){
//     case 1:
//         document.write('Congr!!! You win the car')
//         break
//     case 2:
//         document.write('Congr!!! You win the motobike')
//         break
//     case 3:
//         document.write('Congr!!! You win the bike')
//         break
//     case 4:
//         document.write('Congr!!! You win the phone')
//         break
//     case 5:
//         document.write('Congr!!! You win the doll')
//         break
//     default:
//         document.write('sorry, wrong number' )
// }