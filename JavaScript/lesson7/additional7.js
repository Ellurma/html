
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//            name: 'Romaguera-Crona',
//            catchPhrase: 'Multi-layered client-server neural-net',
//            bs: 'harness real-time e-markets'
// }
// }
class Company{
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
let company=new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
class Geo{
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
let geo=new Geo('-37.3159','81.1496')
class Address{
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
let address=new Address('Kulas Light','Apt. 556','Gwenborough', '92998-3874', geo)
class User{
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
let user=new User(1,'Leanne Graham','Bret','Sincere@april.biz',address,'1-770-736-8031 x56442',
    'hildegard.org',company)
console.log(user);
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
let tag1=new Tag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь,происходит переход к закладке внутри веб-страницы.', [
    { titleOfAttr: 'accesskey',
        actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},
    { titleOfAttr: 'coords',
        actionOfAttr:'Устанавливает координаты активной области.'},
    { titleOfAttr: 'download',
        actionOfAttr:'Предлагает скачать указанный по ссылке файл.'}])
let tag2=new Tag('<div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [{ titleOfAttr: 'align',
        actionOfAttr:'Задает выравнивание содержимого тега <div>.'},
        { titleOfAttr: 'title',
            actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'},])
let tag3=new Tag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',[{ titleOfAttr: 'align',
        actionOfAttr:'Определяет выравнивание заголовка.'},])
let tagsArray=[tag1,tag2,tag3]
console.log(tagsArray)
