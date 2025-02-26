// Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)

// Приклад виконання:

// Повинен знаходити: Wonderful, Joyful

// Не повинен знаходити: Happiness, Time, Task, Apple


const someString = "Wonderful, Joyful, Happiness, Time, Task, Apple, Uf, Agenda, Int, exited";

const patternWIthoutLetterA = /\b(?!\w*[aA])\w{6,}\b/g;

const filteredString = someString.match(patternWIthoutLetterA);
console.log(filteredString);
