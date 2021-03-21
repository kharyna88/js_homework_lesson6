// - создать массив с 20 числами.

let numbers = [2, 21, 12, 32, 6, 77, 54, 67, 50, 4, 5, 43, 26, 61, 42, 41, 28, 39, 88, 93];

// -- при помощи метода sort и колбека  отсортировать массив.

numbers.sort((a, b) => a - b);

console.log(numbers);
console.log('==============================================');
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

numbers.sort((a, b) => b - a);

console.log(numbers);
console.log('==============================================');
// -- при помощи filter получить числа кратные 3

let filterNumber = numbers.filter(number => {
    return (number % 3) === 0;
})

console.log(filterNumber);
console.log('==============================================');
// -- при помощи filter получить числа кратные 10

filterNumber = numbers.filter(number => {
    return (number % 10) === 0;
})

console.log(filterNumber);

console.log('==============================================');

// -- перебрать (проитерировать) массив при помощи foreach()

numbers = [2, 21, 12, 32, 6, 77, 54, 67, 50, 4, 5, 43, 26, 61, 42, 41, 28, 39, 88, 93];

numbers.forEach(number => {
    console.log(number);
})

console.log('==============================================');
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let changedNumbers = numbers.map((value) => {
    value = value * 3;
    return value
})

console.log(changedNumbers);
console.log('==============================================');

// - создать массив со словами на 15-20 элементов.

let words = ['ball', 'cat', 'sun', 'star', 'radio', 'book', 'shirt', 'biscuit', 'cheese', 'market', 'toy', 'jacket', 'shampoo', 'plane', 'ground', 'leaf', 'snow', 'wine'];

// -- отсортировать его по алфавиту в восходящем порядке.

words.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})

console.log(words);
// -- отсортировать его по алфавиту  в нисходящем порядке.

words.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
})

console.log(words);

// -- отфильтровать слова длиной менее 4х символов

let filterWord = words.filter(word => word.length < 4);

console.log(filterWord);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let newWords = words.map(word => {
    word = word + '!';
    return word;
})

console.log(newWords);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{ name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((user1, user2) => user1.age - user2.age);

console.log(users);

users.sort((user1, user2) => user2.age - user1.age);

console.log(users);
console.log('==============================================');
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)


users.sort((user1, user2) => user1.name.length - user2.name.length)

console.log(users);

users.sort((user1, user2) => user2.name.length - user1.name.length)

console.log(users);
console.log('==============================================');

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithId = users.map((value) => {

    value.id = Math.round(Math.random() * 100);
    return value;
});

// - відсортувати його за індентифікатором

usersWithId.sort((user1, user2) => user1.id - user2.id);

console.log(usersWithId);
console.log('==============================================');

// -- наисать функцию калькулятора с 2мя числами и колбеком

function calculator(a, b, callback) {
    return callback(a, b);
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

console.log(calculator(8, 4, addition));
console.log(calculator(8, 4, subtraction));
console.log(calculator(8, 4, multiplication));
console.log(calculator(8, 4, division));
console.log('==============================================');
// -- наисать функцию калькулятора с 3мя числами и колбеком

function calculatorForThree(a, b, c, callback1, callback2) {
    let ab = callback1(a, b);
    return callback2(ab, c);
}

console.log(calculatorForThree(4, 5, 6, multiplication, subtraction));