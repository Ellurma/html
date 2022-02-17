// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone){
    this['id']=id;
    this['name']=name;
    this['surname']=surname;
    this['email']=email;
    this['phone']=phone;
}
let user=new User(1,'ivan', 'ivaniv', 'ivan@gmail.com', '0681234567')
console.log(user);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrayUser=[
    new User(1,'olya','olkiv','ol@gmail.com','067123232323'),
    new User(2, 'alex','alexiv','alex@gmail.com', '067455656565'),
    new User(3, 'max', 'maxiv', 'max@gmail.com', '067234454545'),
    new User(4,'ira','irkiv','ira@gmail.com','067678787878'),
    new User(5,'nik', 'nikolaev','nik@gmail.com','067456565656'),
    new User(6,'ura','urkiv','ura@gmail.com','098345454556'),
    new User(7,'maria','marivna','mar@gmail.com','098454323123'),
    new User(8,'oleh','olehiv','oleh@gmail.com','06798767654'),
    new User(9,'lena','lenko','olen@gmail.com','067455667789'),
    new User(10,'lili','liliv','lil@gmail.com','08745567778')
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter=arrayUser.filter(user=>user.id%2===0)
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort=arrayUser.sort((a,b)=>b.id-a.id)
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
class   Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrayClient = [
   new Client(1, 'eva', 'giga', 'eg@gmail.com', '067345676787', ['bananas', 'car', 'bird']),
    new Client(2,'zina','zizi','ziz@gmail.com','0784567789',['soup','soap',]),
    new Client(3,'maria','marivna','mar@gmail.com','098454323123',['cup','lipstick','ice cream','book']),
    new Client(4,'lili','liliv','lil@gmail.com','08745567778',['meat','fish','milk']),
    new Client(5,'lena','lenko','olen@gmail.com','067455667789',['canon','water','gold']),
    new Client(6,'ira','irkiv','ira@gmail.com','067678787878',['sweets']),
    new Client(7,'ura','urkiv','ura@gmail.com','098345454556',['sugar','kokos']),
    new Client(8,'olya','olkiv','ol@gmail.com','067123232323',['lemon',['orange','ice']]),
    new Client(9, 'max', 'maxiv', 'max@gmail.com', '067234454545',['cat','dog']),
    new Client(10,'nik', 'nikolaev','nik@gmail.com','067456565656',['burger'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
console.log(arrayClient.sort((a, b) => a.order.length - b.order.length));
