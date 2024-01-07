// Задані рядки для опрацювання
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

// Знайти та вивести довжину стрінгових значень
let length1 = str1.length; // Довжина рядка str1
let length2 = str2.length; // Довжина рядка str2
let length3 = str3.length; // Довжина рядка str3

// Виведення довжини стрінгових значень
console.log(`Довжина "${str1}": ${length1}`);
console.log(`Довжина "${str2}": ${length2}`);
console.log(`Довжина "${str3}": ${length3}`);

// Перетворення рядків у верхній регістр
let str1Upper = str1.toUpperCase(); // str1 у верхньому регістрі
let str2Upper = str2.toUpperCase(); // str2 у верхньому регістрі
let str3Upper = str3.toUpperCase(); // str3 у верхньому регістрі

// Виведення рядків у верхньому регістрі
console.log(`Великий регістр "${str1}": ${str1Upper}`);
console.log(`Великий регістр "${str2}": ${str2Upper}`);
console.log(`Великий регістр "${str3}": ${str3Upper}`);

// Перетворення рядків у нижній регістр
let str1Lower = str1.toLowerCase(); // str1 у нижньому регістрі
let str2Lower = str2.toLowerCase(); // str2 у нижньому регістрі
let str3Lower = str3.toLowerCase(); // str3 у нижньому регістрі

// Виведення рядків у нижньому регістрі
console.log(`Нижній регістр "${str1}": ${str1Lower}`);
console.log(`Нижній регістр "${str2}": ${str2Lower}`);
console.log(`Нижній регістр "${str3}": ${str3Lower}`);

// Задання вихідної стрінги з пробілами на початку і в кінці
let dirtyString = ' dirty string   ';
// Видалення пробілів на початку і в кінці рядка
let cleanedString = dirtyString.trim();
// Виведення очищеної стрінги на консоль
console.log(`Очищена стрінга: "${cleanedString}"`);

// Задання масиву чисел
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// Конвертація чисел в рядковий формат
let stringNumbers = numbers.map(num => num.toString());
// Виведення рядкового масиву на консоль
console.log(stringNumbers);

// Функція для сортування чисел у масиві
function sortNums(arr, direction) {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } else {
        console.log('Невірний напрямок сортування');
        return arr;
    }
}

// Приклад виклику функції сортування для чисел
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// Масив об'єктів курсів і їх тривалості
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Сортування курсів за тривалістю у зворотньому порядку
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

// Фільтрація курсів за тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredCourses);

// Масив об'єктів карти
let deckOfCards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heats', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '5', color: 'red' },
];

// Групування карт за мастями
let cardsBySuits = deckOfCards.reduce((result, card) => {
    if (!result[card.cardSuit]) {
        result[card.cardSuit] = [];
    }
    result[card.cardSuit].push(card);
    return result;
}, {});

// Виведення групованих карт на консоль
console.log(cardsBySuits);

let spadesAces = deckOfCards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadesAces);

let sixes = deckOfCards.filter(card => card.value === '6');
console.log(sixes);

let redCards = deckOfCards.filter(card => card.color === 'red');
console.log(redCards);

let highNumberedTrefoils = deckOfCards.filter(card => card.cardSuit === 'clubs' && parseInt(card.value) >= 9);
console.log(highNumberedTrefoils);

let cardsBySuitsReduced = deckOfCards.reduce((result, card) => {
    if (!result[card.cardSuit]) {
        result[card.cardSuit] = [];
    }
    result[card.cardSuit].push(card);
    return result;
}, {});

console.log(cardsBySuitsReduced);

// (Не можу використовувати конкретний файл, тому тут припускається, що ви переписали coursesArray в цьому контексті)

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

// Пошук об'єктів, в яких є 'sass' в modules
let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);

// Пошук об'єктів, в яких є 'docker' в modules
let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);
