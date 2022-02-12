//
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalizeName=(str)=>{
    return str.replaceAll('.',' ').replaceAll('-',' ').replaceAll('_'," ")
}
document.write(normalizeName(n1))
document.write(normalizeName(n2))
document.write(normalizeName(n3))
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr=[]
let getRandom=(arr,num)=> {
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr
}
console.log(getRandom(arr,20))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log(arr.sort((one, two) => {
    return one - two
}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter,
// залишивши тільки парні числа
let filter=arr.filter(value => value % 2 === 0)
console.log(filter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map=arr.map(value=>value+'')
console.log(map)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums=(arr, direction)=>{
    if(direction==='ascending') return arr.sort((a,b) => a-b)
    if(direction==='descending') return arr.sort((a,b) => b-a)
}
console.log(sortNums([11,21,3,76,8,34,6,32,12,23],'descending'))
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.sort((current, next) =>
    current.monthDuration - next.monthDuration));
// let filterCourse=coursesAndDurationArray.filter(course=>course.monthDuration>5)
// console.log(filterCourse)
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
