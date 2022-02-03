// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time=prompt('enter number');
// if (time<=15){
//     console.log('it`s the first quarter')
// } else if (time<=30){
//     console.log('it`s the second quarter')
// } else if(time<=45){
//     console.log('it`s the third quarter')
// } else {
//     console.log('it`s the forth quarter')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day=prompt('enter day')
// if (day<=10){
//     console.log('it`s the first part')
// } else if(day<=20) {
//     console.log('it`s the second part')
// } else if(day<=31){
//     console.log('it`s the third part')
// } else {
//     console.log('enter correct day')
// }
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test=confirm('??')
//  if (test) {
//     console.log('true')
//  } else {console.log('false')}

// let test=confirm('??') ? 'true':'false'
// console.log(test)


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a=+prompt('enter number')
// if (a===0){
//     console.log(false)}
//     else {console.log(true)
// }
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let list=prompt('please, enter day')
// switch (list) {
//     case 'monday':
//         document.write('<div>'+'Your list for monday'+'</div>>')
//         document.write('<div>'+'10.00 English lesson'+'</div>>')
//         document.write('<div>'+'12.00 Bussiness meet'+'</div>>')
//         document.write('<div>'+'18.00 Training'+'</div>>')
//         break;
//     case 'tuesday':
//         document.write('<div>'+'Your list for tuesday'+'</div>>')
//         document.write('<div>'+'10.00  Zoom lesson'+'</div>>')
//         document.write('<div>'+'12.00 Working'+'</div>>')
//         document.write('<div>'+'18.00 Coffee break'+'</div>>')
//         break;
//     case 'wednesday':
//         document.write('<div>'+'Your list for wednesday'+'</div>>')
//         document.write('<div>'+'10.00 Working'+'</div>>')
//         document.write('<div>'+'12.00 Coffee break'+'</div>>')
//         document.write('<div>'+'18.00 Working'+'</div>>')
//         break;
//     case 'thursday':
//         document.write('<div>'+'Your list for thursday'+'</div>>')
//         document.write('<div>'+'10.00  Zoom lesson'+'</div>>')
//         document.write('<div>'+'12.00 Working'+'</div>>')
//         document.write('<div>'+'18.00 Training'+'</div>>')
//         break;
//     case 'friday':
//         document.write('<div>'+'Your list for friday'+'</div>>')
//         document.write('<div>'+'10.00 English lesson'+'</div>>')
//         document.write('<div>'+'12.00 Working'+'</div>>')
//         document.write('<div>'+'18.00 Walking'+'</div>>')
//         break;
//     case 'saturnday':
//         document.write('<div>'+'Your list for saturnday'+'</div>>')
//         document.write('<div>'+'10.00 Zoom lesson'+'</div>>')
//         document.write('<div>'+'12.00 Working'+'</div>>')
//         document.write('<div>'+'18.00 Reading'+'</div>>')
//         break;
//     case 'sunday':
//         document.write('<div>'+'Your list for sunday'+'</div>>')
//         document.write('<div>'+'10.00 Walking'+'</div>>')
//         document.write('<div>'+'12.00 Coffee break'+'</div>>')
//         document.write('<div>'+'18.00 Films with friends'+'</div>>')
//         break;
//     default:
//         document.write('<div>'+'error!!! please, enter day again '+'</div>>')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let yourYear=+prompt('enter year')
// if (yourYear%4===0){
//     console.log('leap year')
// }else{
//     console.log('not leap year')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let qst=prompt('what`s oficial JavaScript name?')
if (qst=='ECMAScript'){
    document.write('<div>'+'You are right'+'</div>>')
}else{
    document.write('<div>'+'Don`t know? it`s ECMAScript'+'</div>>')
}