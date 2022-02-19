// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let idContent=document.getElementById('content')
console.log(idContent.textContent);
// -- отримує текст з блоку з id "rules"
let idRules=document.getElementById('rules')
 console.log(idRules.textContent);
// -- замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText='hello'
// -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText='I`m glad to see you'
// -- змініть кожному елементу колір фону на червоний
let allElements=document.body.children
for (let allElement of allElements) {
    allElement.style.background="red"
}
// -- змініть кожному елементу колір тексту на синій
for (let allElement of allElements) {
    allElement.style.color='blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(idRules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules=document.getElementsByClassName('fc_rules')
for (const fcRule of fcRules) {
    fcRule.style.color='green'
}
