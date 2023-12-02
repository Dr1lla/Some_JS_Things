// Перший блок: генерація 10 блоків div з текстом та стилями
for (let i = 0; i < 10; i++) {
    // Виведення блоку div з встановленими стилями
    document.write('<div style="text-align: center; border: 1px solid #ccc; padding: 10px; margin: 5px; background-color: black; color: white;">Text in Div ' + (i + 1) + '</div>');
}

// Другий блок: генерація 10 блоків div з текстом, індексами та стилями
for (let i = 0; i < 10; i++) {
    // Виведення блоку div з встановленими стилями та індексом
    document.write('<div style="text-align: center; border: 1px solid #ccc; padding: 10px; margin: 5px; background-color: #4e4747; color: white;">Text in Div ' + (i + 1) + ' with index ' + i + '</div>');
}

// Третій блок: генерація 20 заголовків h1
let container1 = 1;
const maxBlocks1 = 20;

while (container1 <= maxBlocks1) {
    // Виведення заголовка h1 з встановленими стилями
    document.write('<h1 style="text-align: center; ">Heading </h1>');
    container1++;
}

// Четвертий блок: генерація 20 заголовків h1 з індексами та стилями
let container2 = 1;
const maxBlocks2 = 20;

while (container2 <= maxBlocks2) {
    // Виведення заголовка h1 з встановленими стилями та індексом
    document.write('<h1 style="text-align: center; background: black; color: white; ">Heading with index ' + container2 + '</h1>');
    container2++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// Виведення початкового тегу <ul>
document.write('<ul>');

// Цикл для проходження крізь елементи масиву та вставки їх у шаблон
for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li>' + listOfItems[i] + '</li>');
}

// Виведення закриваючого тегу </ul>
document.write('</ul>');

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Користувачі зі статусом true
console.log("Користувачі зі статусом true:");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}

// Користувачі зі статусом false
console.log("Користувачі зі статусом false:");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        console.log(users[i]);
    }
}

// Користувачі, які старші за 30 років
console.log("Користувачі, які старші за 30 років:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(users[i]);
    }
}