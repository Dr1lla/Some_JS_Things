function calculateRectangleArea(a, b) {
    // Обчислення площі прямокутника
    let area = a * b;

    // Повернення результату
    return area;
}

// Приклад використання функції
let sideA = 5;
let sideB = 8;
let rectangleArea = calculateRectangleArea(sideA, sideB);

// Виведення результату
console.log("Площа прямокутника зі сторонами", sideA, "і", sideB, "дорівнює", rectangleArea);

function calculateCircleArea(r) {
    // Обчислення площі кола
    let area = Math.PI * Math.pow(r, 2);

    // Повернення результату
    return area;
}

// Приклад використання функції
let radius = 3;
let circleArea = calculateCircleArea(radius);

// Виведення результату
console.log("Площа кола з радіусом", radius, "дорівнює", circleArea);

function calculateCylinderSurfaceArea(h, r) {
    // Обчислення площі циліндра
    let lateralSurfaceArea = 2 * Math.PI * r * h; // Площа бічної поверхні
    let baseArea = Math.PI * Math.pow(r, 2);      // Площа одного основи
    let totalSurfaceArea = lateralSurfaceArea + 2 * baseArea; // Загальна площа циліндра

    // Повернення результату
    return totalSurfaceArea;
}

// Приклад використання функції
let height = 5;
let radiusCylinder = 2;
let cylinderSurfaceArea = calculateCylinderSurfaceArea(height, radiusCylinder);

// Виведення результату
console.log("Площа циліндра з висотою", height, "та радіусом", radiusCylinder, "дорівнює", cylinderSurfaceArea);

function printArrayElements(arr) {
    // Виведення кожного елемента масиву
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Приклад використання функції
let exampleArray = [1, 2, 3, 4, 5];
printArrayElements(exampleArray);

function createParagraph(text) {
    //Створення параграфу з текстом
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}

// Приклад використання
createParagraph("Це текст для параграфу.");

function createListWithSameText(text) {
    //Створення ul з трьома елементами li і однаковим текстом
    let ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

// Приклад використання
createListWithSameText("Це текст для елементів списку.");

function createListWithSameTextAndCount(text, count) {
    //Створення ul з динамічною кількістю елементів li з однаковим текстом
    let ul = document.createElement("ul");
    for (let i = 0; i < count; i++) {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

// Приклад використання
createListWithSameTextAndCount("Це текст для елементів списку.", 5);

function createListFromArray(arr) {
    //Створення списку з масиву примітивів
    let ul = document.createElement("ul");
    arr.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

// Приклад використання
createListFromArray([1, "Hello", true, 42]);

function displayObjects(arr) {
    //Створення блоків для об'єктів з масиву
    arr.forEach(function (obj) {
        let block = document.createElement("div");
        block.innerHTML = `<p>ID: ${obj.id}</p><p>Name: ${obj.name}</p><p>Age: ${obj.age}</p>`;
        document.body.appendChild(block);
    });
}

// Приклад використання
let objectsArray = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
];
displayObjects(objectsArray);

function findMinNumber(arr) {
    //Знаходження мінімального числа в масиві
    return Math.min(...arr);
}

// Приклад використання
let numbersArray = [5, 3, 8, 2, 10];
let minNumber = findMinNumber(numbersArray);
console.log("Мінімальне число: " + minNumber);

function sum(arr) {
    //Сумування елементів масиву
    return arr.reduce((total, current) => total + current, 0);
}

// Приклад використання
let numbersToSum = [1, 2, 10];
let resultSum = sum(numbersToSum);
console.log("Сума елементів масиву: " + resultSum);

function swap(arr, index1, index2) {
    //Функція для обміну значеннями за індексами
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

// Приклад використання
let arrayToSwap = [11, 22, 33, 44];
let swappedArray = swap(arrayToSwap, 0, 1);
console.log("Масив після обміну:", swappedArray);

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    //Функція для обміну валюти
    let exchangeRate = 1; // За замовчуванням обмін на UAH
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    return sumUAH / exchangeRate;
}

// Приклад використання
let exchangedAmount = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log("Сума в обраній валюті:", exchangedAmount);
