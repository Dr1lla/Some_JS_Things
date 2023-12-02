// Масив з різнорідними даними
let arr1 = [164, 'someBlueberryPie', true, 8236, 11, 'Gubamy', false, 678, '286', 86];

// Виведення елементів масиву arr1 за допомогою console.log
console.log(arr1[0]);  // Виведе перший елемент (164)
console.log(arr1[1]);  // Виведе другий елемент ('someBlueberryPie')
console.log(arr1[2]);  // Виведе третій елемент (true)
console.log(arr1[3]);  // Виведе четвертий елемент (8236)
console.log(arr1[4]);  // Виведе п'ятий елемент (11)
console.log(arr1[5]);  // Виведе шостий елемент ('Gubamy')
console.log(arr1[6]);  // Виведе сьомий елемент (false)
console.log(arr1[7]);  // Виведе восьмий елемент (678)
console.log(arr1[8]);  // Виведе дев'ятий елемент ('286')
console.log(arr1[9]);  // Виведе десятий елемент (86)

// Об'єкт arr2, який містить книги
let arr2 = {
    book1: {
        title: 'The Churchill factor. How one person changed history',
        pageCount: 400,
        genre: 'Historical Roman'
    },
    book2: {
        title: 'Romeo & Juliet',
        pageCount: 208,
        genre: 'Art Roman'
    },
    book3: {
        title: 'Fairy Tale',
        pageCount: 592,
        genre: 'Historical Roman'
    }
};

// Об'єкт arr3, який містить книги з інформацією про авторів
let arr3 = {
    book4: {
        title: 'The Churchill factor. How one person changed history',
        pageCount: 400,
        genre: 'Historical Roman',
        author: {
            name: 'Boris Johnson',
            age: 59
        }
    },
    book5: {
        title: 'Romeo & Juliet',
        pageCount: 208,
        genre: 'Art Roman',
        author: {
            name: 'William Shakespeare',
            age: 52
        }
    },
    book6: {
        title: 'Fairy Tale',
        pageCount: 592,
        genre: 'Historical Roman',
        author: {
            name: 'Stephen King',
            age: 76
        }
    }
};
//Виведення елементів масиву arr2 та arr3 за допомогою console.log
console.log(arr2)
console.log(arr3)

// Масив користувачів з об'єктами, що містять ім'я, логін і пароль
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

// Виведення паролів користувачів за допомогою forEach
users.forEach(function(user) {
    console.log(user.password);
});

// Логічне розгалуження для змінних x1, x2, x3
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

// Логічне розгалуження для перевірки діапазону часу
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

// Логічне розгалуження для визначення декади місяця
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
// Визначення подій на тиждень за допомогою switch
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

// Введення користувачем двох чисел та знаходження максимального
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

// Присвоєння значення "default" змінній x, якщо вона є falsy
let x = null;
x = x || "default";
console.log(x);

// Перевірка курсів за допомогою циклу for та інструкції switch
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
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
