// - -Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// Зробила функцію з циклом, не розумію чому не відпрацьовує?????
// let cutString=(str, n)=>{
//     let arr=[]
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.substring(i,n) )
//     }return arr
// }
// document.write(cutString('наслаждение',3))


// let cutString=(str, n)=>{
//     let arr=[]
//         arr.push(str.substring(0,n))
//         arr.push(str.substring(n,n+n))
//         arr.push(str.substring(n+n,n+n+n))
//         arr.push(str.substring(n+n+n,n+n+n+n)
//         )
//     return arr
// }
// document.write(cutString('наслаждение',3))
// console.log(cutString('наслаждение',3))


// - +Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@),наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.
// let arrEmailValid=[]
// let emailValid=(str)=>{
//     let strLowerCase=str.toLowerCase()
//     if(!strLowerCase.includes('@')){
//         console.log('wrong email')
//     }else if ((strLowerCase.indexOf('.'))-(strLowerCase.indexOf('@'))>1){
//         console.log('wrong email')
//     }
//     return arrEmailValid.push(strLowerCase)
// }
// emailValid('some.email@gmail.com')
// console.log(arrEmailValid)


// - +є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// +відсортувати його в спадаючому порядку за кількістю елементів в полі modules
coursesArray.sort((a,b)=>a.modules.length-b.modules.length)
console.log(coursesArray);

// - +Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let str = "Астрономия это наука о небесных объектах";
// let stringSearch=(str,letter)=>{
//     let str1=str.toLowerCase()
//     let counter=0
//     for (let i = 0; i < str.length; i++) {
//         if (str1[i]===letter){
//             counter=counter+1
//     }
//     }return counter
// }
// console.log(stringSearch(str, 'о'));
// - +Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString=(str, n)=>{
    let arrOfString=str.split(' ');
    let length=arrOfString.length
    arrOfString.splice(n,length)
    let newStr=arrOfString.toString()
    return newStr.replaceAll(',',' ')
}
console.log(cutString(str, 5));