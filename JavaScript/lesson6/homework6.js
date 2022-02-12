// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a='hello world'
let b='lorem ipsum'
let c='javascript is cool'
console.log(a.length);
console.log(b.length);
console.log(c.length);
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string     '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr=stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str= 'Каждый охотник желает знать';
// let stringToarray=(string)=>{ return str.split(' ')}
// let arr = stringToarray(str)
// console.log(arr)
// document.write(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//  let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters=(str, length)=>{
//     return str.substring(0,length)
// }
// document.write(delete_characters(str,6));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str="HTML JavaScript PHP"
// let insert_dash=(str)=>{
//     return str.replaceAll(' ','-').toUpperCase()
// }
// document.write(insert_dash(str))
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str='приймає рядок як аргумент'
// let firstLetterUp=(str)=>{
//     return str[0].toUpperCase()+str.substring(1)}
// console.log(firstLetterUp(str))
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize=(str)=>{
let capitalize = (str) => {
    let arr = str.split(' ');
    arr.forEach(function(item, index) {
        arr[index] = item.replace(item[0], item[0].toUpperCase());
    });
    return arr.join(' ');
};
console.log(capitalize(str))