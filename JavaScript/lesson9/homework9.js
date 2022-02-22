// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.innerText='hello'
div.style.background='red'
div.style.color='blue'
div.style.width='200px'
div.style.fontSize='40px'
// - додати цей блок в body.
document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
let divClone=div.cloneNode(true)
document.body.appendChild(divClone)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title
// та monthDuration
// Завдання робити через цикли.
for (const coursesElement of coursesAndDurationArray) {
 let divElement=document.createElement('div')
    divElement.innerText=`Курси ${coursesElement.title}  тривають  ${coursesElement.monthDuration} місяців`
    document.body.appendChild(divElement)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesElement of coursesAndDurationArray) {
    let divElement=document.createElement('div')
    divElement.classList.add('item')
    let h1=document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText=`${coursesElement.title}`
    let p=document.createElement('p')
    p.classList.add('description')
    p.innerText=`${coursesElement.monthDuration}`

    document.body.append(h1,p)
}
