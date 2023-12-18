// Обчислення площі прямокутника за допомогою стрілочної функції
const rectangleArea = (a, b) => {
    // Обчислення площі прямокутника
    const area = a * b;
    // Повертання результату обчислення
    return area;
};
// Виведення результату у консоль
console.log(rectangleArea(20, 20));

// Обчислення площі кола за допомогою стрілочної функції
const circleArea = r => {
    // Обчислення площі кола
    return Math.PI * r ** 2;
};
// Виведення результату у консоль
console.log(circleArea(10));

// Обчислення площі циліндра за допомогою стрілочної функції
const cylinderArea = (r, h) => {
    // Обчислення площі циліндра
    return 2 * Math.PI * r * (r + h);
};
// Виведення результату у консоль
console.log(cylinderArea(20, 10));

// Виведення елементів масиву за допомогою стрілочної функції
const displayArrayElements = arr => arr.forEach(element => console.log(element));
// Виклик функції з прикладовим масивом
displayArrayElements([10, "Стрінга!", true]);

// Створення параграфу за допомогою стрілочної функції
const createParagraph = text => {
    // Створення нового елементу <p> (параграф)
    let paragraph = document.createElement("p");

    // Задання текстового вмісту параграфу
    paragraph.textContent = text;

    // Додавання параграфу до тіла документу
    document.body.appendChild(paragraph);
};

// Виклик функції з прикладовим текстом
createParagraph("Це новий абзац, створений за допомогою JavaScript!");


// Створення ul з трьома li і однаковим текстом:
const createListWithSameText = text => {
    // Створення нового елементу <ul> (нумерований список)
    let ul = document.createElement("ul");
    // Цикл для створення трьох пунктів списку <li>
    for (let i = 0; i < 3; i++) {
        // Створення нового елементу <li> (пункт списку)
        let li = document.createElement("li");
        // Задання текстового вмісту пункту списку
        li.textContent = text;
        // Додавання пункту списку до нумерованого списку
        ul.appendChild(li);
    }
    // Додавання нумерованого списку до тіла документу
    document.body.appendChild(ul);
};
// Виклик функції з прикладовим текстом
createListWithSameText("Це текст для елементів списку");

// Функція для створення нумерованого списку з заданим текстом та кількістю елементів
const createListWithSameTextAndCount = (text, count) => {
    // Створення нового елементу <ul> (нумерований список)
    let ul = document.createElement("ul");
    // Цикл для створення певної кількості пунктів списку <li>
    for (let i = 0; i < count; i++) {
        // Створення нового елементу <li> (пункт списку)
        let li = document.createElement("li");
        // Задання текстового вмісту пункту списку
        li.textContent = text;
        // Додавання пункту списку до нумерованого списку
        ul.appendChild(li);
    }
    // Додавання нумерованого списку до тіла документу
    document.body.appendChild(ul);
};
// Виклик функції з прикладовим текстом і кількістю
createListWithSameTextAndCount("Це текст для елементів списку", 5);

// Функція для створення нумерованого списку з елементів масиву
const createListFromArray = arr => {
    // Створення нового елементу <ul> (нумерований список)
    let ul = document.createElement("ul");
    // Використання методу forEach для перебору кожного елемента масиву
    arr.forEach(item => {
        // Створення нового елементу <li> (пункт списку)
        let li = document.createElement("li");
        // Задання текстового вмісту пункту списку з елемента масиву
        li.textContent = item;
        // Додавання пункту списку до нумерованого списку
        ul.appendChild(li);
    });
    // Додавання нумерованого списку до тіла документу
    document.body.appendChild(ul);
};
// Виклик функції з прикладовим масивом
createListFromArray(["Елемент 1", "Елемент 2", "Елемент 3"]);

// Функція для відображення об'єктів у вигляді блоків на сторінці
const displayObjects = arr => {
    // Створення нового елементу <div> (гнучкий контейнер)
    let container = document.createElement("div");
    // Додавання класу для застосування стилів
    container.classList.add("object-container");
    // Використання методу forEach для перебору кожного об'єкта у масиві
    arr.forEach(obj => {
        // Створення нового елементу <div> (блок)
        let block = document.createElement("div");
        // Задання HTML-вмісту блоку за допомогою властивостей об'єкта
        block.innerHTML = `<p>ID: ${obj.id}</p><p>Name: ${obj.name}</p><p>Age: ${obj.age}</p>`;
        // Додавання блоку до гнучкого контейнера
        container.appendChild(block);
    });
    // Додавання гнучкого контейнера до тіла документу
    document.body.appendChild(container);
    // Динамічне створення стилів
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
};
// Виклик функції з прикладовим масивом об'єктів
displayObjects([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
]);

// Функція для пошуку мінімального числа у масиві
const findMinNumber = arr => {
    // Використання оператора spread для передачі всіх елементів масиву
    // до метода Math.min, який повертає мінімальне значення.
    const minNumber = Math.min(...arr);
    // Повертаємо знайдене мінімальне число
    return minNumber;
};
// Приклад виклику функції
const numbers = [5, 3, 9, 1, 7];
const minNumber = findMinNumber(numbers);
console.log(minNumber); // Очікуваний результат: 1

// Функція для обчислення суми елементів масиву
const sum = arr => {
    // Використовуємо метод reduce для обчислення суми
    const total = arr.reduce((accumulator, current) => {
        // Додаємо поточний елемент до акумулятора
        return accumulator + current;
    }, 0);
    // Повертаємо обчислену суму
    return total;
};
// Приклад виклику функції
const myNumbers = [5, 3, 9, 1, 7];
const result = sum(myNumbers);
console.log(result); // Очікуваний результат: 25

// Функція для обміну елементів масиву за заданими індексами
const swap = (arr, index1, index2) => {
    // Використовуємо деструктивне присвоювання для обміну елементів масиву
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    // Повертаємо змінений масив
    return arr;
};
// Приклад виклику функції
const elements = [5, 3, 9, 1, 7];
const swappedElements = swap(elements, 1, 3);
console.log(swappedElements); // Очікуваний результат: [5, 1, 9, 3, 7]

// Функція для обміну суми в гривнях на вказану валюту
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    // Значення обмінного курсу за замовчуванням (1 за 1)
    let exchangeRate = 1;
    // Перебір всіх валют в масиві currencyValues
    for (let i = 0; i < currencyValues.length; i++) {
        // Перевірка, чи поточна валюта відповідає валюті, яку шукаємо
        if (currencyValues[i].currency === exchangeCurrency) {
            // Якщо знайдено, встановлюємо обмінний курс
            exchangeRate = currencyValues[i].value;
            // Завершуємо цикл, оскільки ми знайшли потрібну валюту
            break;
        }
    }
    // Обчислення обміненої суми в іншій валюті
    const exchangedAmount = sumUAH / exchangeRate;
    // Повертаємо обмінену суму
    return exchangedAmount;
};
// Приклад виклику функції
const uahAmount = 1000;
const currencies = [
    { currency: 'USD', value: 26.5 },
    { currency: 'EUR', value: 30.0 },
    // інші валюти...
];
const exchangedAmountUSD = exchange(uahAmount, currencies, 'USD');
console.log(exchangedAmountUSD); // Очікуваний результат: приблизно 37.74

