// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// document.getElementById('btn').onclick=function () {
//     let input1=document.forms.f1.a1.value
//     let input2=document.forms.f1.a2.value
//     let input3=document.forms.f2.b1.value
//     let input4=document.forms.f2.b2.value
//     console.log(input1,input2,input3,input4)
// }
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form=document.forms['table_form']
// form.onsubmit=function (e) {
//     e.preventDefault()
//     let row=+form.row.value
//     let column=+form.column.value
//     let text=form.text.value
//     let table=document.createElement('table')
//     for (let i = 0; i < row; i++) {
//         let tr=document.createElement('tr')
//
//         for (let j = 0; j < column; j++) {
//         let td=document.createElement('td')
//             td.innerText=text
//         tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     document.body.appendChild(table)
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let badWordArr=['putin','russia','fuck']
// let btn=document.getElementById('btn')
// btn.onclick=function (){
//     let word=document.getElementById('word').value
//     for (const badWord of badWordArr) {
//         if(word===badWord){
//             alert('bad word')
//         }
//     }
//
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let badWordArr=['putin','russia','fuck']
let btn=document.getElementById('btn')
btn.onclick=function (){
    let sentense=document.getElementById('word').value
    for (const badWord of badWordArr) {
        if(sentense.includes(badWord)){
            alert('bad word')
        }
    }

}
