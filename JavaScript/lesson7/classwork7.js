// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model,producer,year,maxSpeed,energy){
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.energy=energy
//     this.drive=function (){console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)}
//     this.info=function (){
//         for (let car in this) {
//             if (typeof this[car]!=='function'){
//             document.write(`${car}-${this[car]},  `)}
//         }
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maxSpeed=this.maxSpeed+newSpeed
//     }
//     this.changeYear=function (newValue){
//          this.year=newValue
//     }
//     this.addDriver=function (driver){
//         this.driver=driver
//     }
// }
//
// let cars=new Cars('oktavia','scoda',2010,210,2)
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(20);
// cars.changeYear(2013);
// cars.addDriver('ura');
// console.log(cars);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//  class Cars{
//      constructor(model,producer,year,maxSpeed,energy) {
//          this.model = model;
//          this.producer = producer;
//          this.year = year;
//          this.maxSpeed = maxSpeed;
//          this.energy = energy
//      }
//         drive (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
//         info (){
//         for (let car in this) {
//             if (typeof this[car]!=='function'){
//                 document.write(`${car}-${this[car]},  `)}
//         }
//     }
//         increaseMaxSpeed=function (newSpeed){
//             console.log(this.maxSpeed+= newSpeed);
//         }
//         changeYear(newValue){
//         this.year=newValue
//     }
//         addDriver(driver){
//         this.driver=driver
//     }
// }
// let cars=new Cars('oktavia','scoda',2010,210,2)
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(20);
// cars.info();
// cars.changeYear(2013);
// cars.info();
// cars.addDriver('ura');
// console.log(cars);
// cars.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelushka{
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelushka1=new Popelushka('Anna',21,35)
let popelushka2=new Popelushka('Alla',28,37)
let popelushka3=new Popelushka('Inna',16,36)
let popelushka4=new Popelushka('Ira',26,38)
let popelushka5=new Popelushka('Olya',22,39)
let popelushka6=new Popelushka('Yana',20,45)
let popelushka7=new Popelushka('Eva',27,40)
let popelushka8=new Popelushka('Miya',17,35.5)
let popelushka9=new Popelushka('Liza',19,36.5)
let popelushka10=new Popelushka('Lili',23,37.5)

let arrayPopelushka=[popelushka1,popelushka2,popelushka3,popelushka4,
    popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10]
console.log(arrayPopelushka);

class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
    findPopelushka(arr){
        for (let arrElement of arr) {
           if(arrElement.footSize===this.shoes){
               console.log(`Popelushka is ${arrElement.name}`)
           }
        }
    }
}
 let prince=new Prince('vasya',25,36)
console.log(prince);
prince.findPopelushka(arrayPopelushka);

let find=arrayPopelushka.find(value => value.footSize===prince.shoes)
console.log(find.name);
