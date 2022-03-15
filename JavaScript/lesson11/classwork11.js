// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let userBox=document.getElementById('users')

for (const user of users) {
    let userDiv=document.createElement('div')
    userDiv.innerText=user.name
    let btn=document.createElement('button')
    btn.innerText='add to favourite'
    btn.onclick=function () {
        let favorites=JSON.parse(localStorage.getItem('favorites')) || []
        favorites.push(user)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    userDiv.append(btn)
    userBox.append(userDiv)
}
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних
// на попередньому етапі.