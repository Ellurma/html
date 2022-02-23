let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
},
    {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
},
    {name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
},
    {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
},
    {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
},
    {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
},
    {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
},
    {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
},
    {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
},
    {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
},
    {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
 let arrAddress=[]
// for (const user of users) {
//     arrAddress.push(user.address)
// }
// console.log(arrAddress);

// console.log(arrAddress);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.
// let wrap=document.createElement('div')
// for (const user of users) {
//     let div=document.createElement('div')
//     div.innerText=`Name-${user.name},   age-${user.age},   status-${user.status},   address: city-${user.address.city},   country-${user.address.country},   street-${user.address.street},   houseNumber-${user.address.houseNumber}  `
//     wrap.append(div)
// }
// document.body.append(wrap)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div=document.createElement('div')
//     let divName=document.createElement('div')
//     divName.innerText=`Name-${user.name}`
//     let divAge=document.createElement('div')
//     divAge.innerText=`Age-${user.age}`
//     let divStatus=document.createElement('div')
//     divStatus.innerText=`Status-${user.status}`
//     let divAddress=document.createElement('div')
//     divAddress.innerText=`Address: city-${user.address.city},   country-${user.address.country},   street-${user.address.street},   houseNumber-${user.address.houseNumber} `
//     div.append(divName, divAge, divStatus,divAddress)
//     document.body.append(div)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної
// властивості
// for (const user of users) {
//     let div = document.createElement('div')
//     let divName = document.createElement('div')
//     divName.innerText = `Name-${user.name}`
//     let divAge = document.createElement('div')
//     divAge.innerText = `Age-${user.age}`
//     let divStatus = document.createElement('div')
//     divStatus.innerText = `Status-${user.status}`
//     let divAddress = document.createElement('div')
//     let divCity = document.createElement('div')
//     divCity.innerText = `Address: city-${user.address.city}`
//     let divCountry = document.createElement('div')
//     divCountry.innerText = `country-${user.address.country}`
//     let divStreet = document.createElement('div')
//     divStreet.innerText = `street-${user.address.street}`
//     let divHouseNumber = document.createElement('div')
//     divHouseNumber.innerText = `houseNumber-${user.address.houseNumber}`
//     divAddress.append(divCity, divCountry, divStreet, divHouseNumber)
//     div.append(divName, divAge, divStatus, divAddress)
//     document.body.append(div)
//
// }
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
//     змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2s=document.getElementsByTagName('h2');
let ul=document.createElement('ul')
let contentDiv=document.getElementById('content')
for (const h2 of h2s) {
    if(h2.innerText){
let li=document.createElement('li')
    li.innerText=h2.innerText
ul.append(li)
    }
}
contentDiv.append(ul)



let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let content=document.createElement('div')
content.id='content'
let h1=document.createElement('h1')
h1.innerText='Правила бойцовского клуба'
let wrap=document.createElement('div')
wrap.id='wrap'
let i=0
for (const rule of rules) {
    let rules=document.createElement('div')
    rules.classList.add('rules')
    ++i
    rules.classList.add('rule'+i)
    let h2=document.createElement('h2')
    h2.innerText=`${rule.title}`
    let p=document.createElement('p')
    p.innerText=`${rule.body}`
    rules.append(h2,p)
    wrap.append(rules)
}
document.body.append(content,h1,wrap,      )