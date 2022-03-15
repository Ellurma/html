// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let f1=document.getElementById('f1')
// f1.onsubmit=function (e) {
//     e.preventDefault()
//     let username=this.username.value
//     let age=this.age.value
//     localStorage.setItem('user',JSON.stringify({username,age}))
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let carsArray=JSON.parse(localStorage.getItem('cars')) || []
let f2=document.forms.f2
f2.onsubmit=function (e) {
    e.preventDefault()
    let model=this.model.value
    let type=this.type.value
    let volume=this.volume.value
    let cars={model,type,volume}
    carsArray.push(cars)
    localStorage.setItem('car', JSON.stringify(carsArray))
}