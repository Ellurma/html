
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку
// исчезал элемент с id="text".
// let text=document.getElementById('text')
// let button=document.getElementById('btn')
// button.onclick=function (){
//     text.hidden=true
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама
document.getElementById('btn').onclick=function () {
    this.hidden=true
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('check_age').onclick=function () {
    let age=document.getElementById('age').value
    if (+age<18) {
        alert('you are too young')
    } else {alert('welcome')}

}
// - Создайте меню, которое раскрывается/сворачивается при клике
document.getElementsByClassName('menu')[0].onclick=function () {
this.classList.toggle('hidden')
}

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArray=[
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]

for (const comment of commentArray) {
    let commentDiv=document.createElement('div')
    let title= document.createElement('h2')
    title.innerText=comment.title
    let bodyComment=document.createElement('div')
    bodyComment.innerText=comment.body
    let btn=document.createElement('button')
    btn.innerText='click to hide comment'
    btn.onclick=function () {
        bodyComment.classList.toggle('hidden')
}

    commentDiv.append(title,bodyComment,btn)
    document.body.append(commentDiv)
}

