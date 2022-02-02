// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let k = 123;
// let l = 3.14;
// let m = 2.7;
// let n = 16;
// let j = true;
// let p = false
// // Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);
// console.log(j);
// console.log(p);
// document.write('<div>' + a + b + c + d + '</div>');
// document.write(e);
// document.write(f);
// document.write(j);
// document.write(m + l + g + j);
// alert(a + b + c + d);
// alert(e);
// alert(k + l);
// alert(j + p)
// alert(e)
// Переприсвоїти кожній змінній з завдання значення на довільне.
// a = 'some';
// b = 'another';
// c = 'words';
// d = 'here';
// e = 5;
// f = 15;
// g = -555;
// k = 987;
// l = 4.31;
// m = 8.6;
// n = 27;
// j = 'false';
// p = 'true'
// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);
// console.log(j);
// console.log(p);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(k);
// alert(l);
// alert(m);
// alert(n);
// alert(j);
// alert(p);
// document.write(a);
// document.write(b);
// document.write(c);
// document.write(d);
// document.write(e);
// document.write(f);
// document.write(g);
// document.write(k);
// document.write(l);
// document.write(m);
// document.write(n);
// document.write(j);
// document.write(p);
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Olena';
let middleName = 'Romanivna';
let lastName = 'Shkolniak';
console.log(firstName);
let person=(firstName+middleName+lastName);
console.log(person)
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
 let age=42;
// prompt(person[0]);
// prompt(person[1]);
// prompt(person[2]);
// console.log(person[1])
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let someMsg1='"Вітаю ';
let someMsg2='. Тобі ';
let someMsg3=' років".';
console.log(someMsg1+firstName+middleName+someMsg2+age+someMsg3);
console.log('Вітаю '+person[0]+' '+person[1]+'. Тобі '+age+' років.')
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c)
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
console.log(5<6);
console.log(5>6);
console.log(5==6);
console.log(5>=6);
console.log(10==10);
console.log(10!=='10');
console.log(10<10);
console.log(10==='10');
console.log(10!=10);
console.log(123=='123');
console.log(123==='123');
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");

