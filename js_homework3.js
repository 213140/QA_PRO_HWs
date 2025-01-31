// Опис ДЗ: Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, 
// друге у яку ступінь.

// Наприклад pow(2,3) функція поверне значення 8.

function pow(x, y){
    let powResult = 1;
    for(let i = 1; i <= y; i++)
    {
        powResult = powResult * x;
    }
    return powResult;
}

console.log(pow(4, 2));