// Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел 
// в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове 
// співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count 
// буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ
// Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних:
// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки

function getRandomNumberFrom100To1000(){
    /* Random number between 100 and 1000 (including both boundary values */
    let randomNumber;

    do{
        randomNumber = Number.parseInt(Math.random() * 1000);
    }
    while(randomNumber < 100 || randomNumber > 1000)

    return randomNumber;
}

function checkProbabilityTheory(count){
    /* Check probability function */

    // Define initial even and odd variables with initial value 0
    let evenNumbersQuantity = 0;
    let oddNumbersQuantity = 0;

    // Generate all requested numbers, additionally sor them between even and odd (using counters/increment)
    for(let i = 1; i <= count; i++){
        if(getRandomNumberFrom100To1000() % 2 == 0){
            evenNumbersQuantity++;
        }
        else {oddNumbersQuantity++;}
    }

    // Present all calculated variables
    console.log("Quantity of generated numbers: " + count);
    console.log("Quantity of even numbers: " + evenNumbersQuantity);
    console.log("Quantity of odd numbers: " + oddNumbersQuantity);

    // Calculate and present percentages for even and odd numbers
    let percentageEvenToAll = Number.parseInt((evenNumbersQuantity/count)*100);
    let percentageOddToAll = Number.parseInt((oddNumbersQuantity/count)*100);
    console.log("Percentage ratio of even numbers to odd numbers: " + 
        percentageEvenToAll + "%" + percentageOddToAll)

    // Using "Pseudo" logic decide if both percentages are so close to each other or not
    let ifSoClose = false;
    if (percentageEvenToAll >= 40 && percentageEvenToAll <= 60 && percentageOddToAll >= 40 && percentageOddToAll <= 60) {
        ifSoClose = true;
    }
    console.log("Is result is close to 50%50 rate? " + ifSoClose ? "Yes, it's close!" : "No, it§s NOT close!");
}

// Example of usage for checkProbabilityTheory function
checkProbabilityTheory(100)