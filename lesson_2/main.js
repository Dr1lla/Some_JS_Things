let arr1 = [164, 'someBlueberryPie', true, 8236, 11, 'Gubamy', false, 678, '286', 86];

console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])

let arr2 = {
    book1:{
        title: 'The Churchill factor. How one person changed history',
        pageCount: 400,
        genre: 'Historical Roman'},
    book2:{
        title: 'Romeo & Juliet',
        pageCount: 208,
        genre: 'Art Roman'},
    book3:{
        title: 'Fairy Tale',
        pageCount: 592,
        genre: 'Historical Roman'}
};
let arr3 = {
    book4:{
        title: 'The Churchill factor. How one person changed history',
        pageCount: 400,
        genre: 'Historical Roman',
        author: {
            name: 'Boris Johnson',
            age: 59,
        }
    },
    book5:{
        title: 'Romeo & Juliet',
        pageCount: 208,
        genre: 'Art Roman',
        author: {
            name: 'William Shakespeare',
            age: 52 ,
        }
    },
    book6:{
        title: 'Fairy Tale',
        pageCount: 592,
        genre: 'Historical Roman',
        author: {
            name: 'Stephen King',
            age: 76,
        }
    }
};
console.log(arr2)
console.log(arr3)

let users = [
    { name: 'John Doe', username: 'john_doe', password: 'pass123' },
    { name: 'Alice Smith', username: 'alice_smith', password: 'secret456' },
    { name: 'Bob Johnson', username: 'bob_johnson', password: 'my_password' },
    { name: 'Emma White', username: 'emma_white', password: 'emma1234' },
    { name: 'Michael Brown', username: 'michael_brown', password: 'mike5678' },
    { name: 'Olivia Davis', username: 'olivia_davis', password: 'oliviaPass' },
    { name: 'William Turner', username: 'will_turner', password: 'will123' },
    { name: 'Sophia Harris', username: 'sophia_harris', password: 'sophiaPass' },
    { name: 'Daniel Lee', username: 'daniel_lee', password: 'danny456' },
    { name: 'Ella Miller', username: 'ella_miller', password: 'ella789' }
];
users.forEach(function(user) {
    console.log(user.password);
});

let x1 = 1;
let x2 = 0;
let x3 = -3;

if (x1 === 0) {
    console.log('Вірно для x1');
} else {
    console.log('Невірно для x1');
}

if (x2 === 0) {
    console.log('Вірно для x2');
} else {
    console.log('Невірно для x2');
}

if (x3 === 0) {
    console.log('Вірно для x3');
} else {
    console.log('Невірно для x3');
}


let time = 37;

if (time >= 0 && time < 15) {
    console.log("Перша четверть години");
} else if (time >= 15 && time < 30) {
    console.log("Друга четверть години");
} else if (time >= 30 && time < 45) {
    console.log("Третя четверть години");
} else {
    console.log("Четверта четверть години");
}


let day = 18;

if (day >= 1 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day > 10 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day > 20 && day <= 31) {
    console.log("Третя декада місяця");
} else {
    console.log("Число не входить в межі від 1 до 31");
}


let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Понеділок: Робочий день");
        break;
    case 2:
        console.log("Вівторок: Масаж о 14:00");
        break;
    case 3:
        console.log("Середа: Зустріч з друзями о 18:30");
        break;
    case 4:
        console.log("Четвер: Тренування в спортзалі о 16:00");
        break;
    case 5:
        console.log("П'ятниця: Вечірка з колегами з роботи о 20:00");
        break;
    case 6:
        console.log("Субота: Вихідний день");
        break;
    case 7:
        console.log("Неділя: Відпочинок та сімейний час");
        break;
    default:
        console.log("Невірно введений порядковий номер дня тижня");
}


let a = parseFloat(prompt("Введіть перше число:"));
let b = parseFloat(prompt("Введіть друге число:"));

if (!isNaN(a) && !isNaN(b)) {
    if (a > b) {
        console.log("Максимальне число: " + a);
    } else if (a < b) {
        console.log("Максимальне число: " + b);
    } else {
        console.log("Введені числа рівні.");
    }
} else {
    console.log("Введені некоректні числа.");
}


let x = null;

x = x || "default";

console.log(x);


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Індикатор, чи є курс із тривалістю більше або рівною 5 місяцям
let hasCourseWithDurationGreaterOrEqualFive = false;

// Перевірка кожного курсу
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration >= 5) {
        hasCourseWithDurationGreaterOrEqualFive = true;
        break; // Якщо знайшли курс із тривалістю більше або рівною 5 місяцям, завершити цикл
    }
}

// Вивід результату
if (hasCourseWithDurationGreaterOrEqualFive) {
    console.log("Є курс із тривалістю більше або рівною 5 місяцям.");
} else {
    console.log("Немає курсів із тривалістю більше або рівною 5 місяцям.");
}
