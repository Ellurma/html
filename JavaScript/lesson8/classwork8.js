//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHead=document.getElementById('main_header')
mainHead.classList.add('js-dec_2021')
// b) робить шириниу елементу ul 400px
let ulElement=document.getElementsByTagName('ul')
console.log(ulElement);
ulElement[0].style.width='400px'
ulElement[0].style.background='red'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList=document.getElementsByClassName('linkList')
console.log(linkList);
for (const linkElement of linkList) {
    linkElement.style.width='50%'
    linkElement.style.border='1px solid black'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElementText=document.getElementsByClassName('listElement2')
console.log(listElementText);
listElementText[0].innerHTML = '<a href=""><b>new link</b></a>'
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li=document.getElementsByTagName('li')
console.log(li);
for (const liElement of li) {
    liElement.style.background='silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a=document.getElementsByTagName('a')
// console.log(a)
// for (const aElement of a) {
//     aElement.classList.add('anchor')
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// for (const aElement of a) {
//     if (aElement.innerText==='link3'){aElement.style.fontSize='40px'}
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
    aElement.classList.add('element_XXX')
}
console.log(a)
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
 let subHeader=document.getElementsByClassName('sub-header')
// console.log(subHeader);
// for (const subElement of subHeader) {
//     subElement.style.background=prompt('enter background color')
// }
// console.log(subHeader);
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()
for (const subElement of subHeader) {
    if (subElement.innerText === 'content 2 segment') {
        subElement.style.background = prompt('enter background color')
    }
}
console.log(subHeader);
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let cont1=document.getElementsByClassName('content_1')
console.log(cont1);
cont1[0].innerText=prompt('enter your text here')
// l) отримати елементи p та змінити їм padding на 20px
let p=document.getElementsByTagName('p')
console.log(p);
p[0].style.padding='20px'
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2=document.getElementsByClassName('text2')
console.log(text2);
text2[0].innerText='dec-2021'
