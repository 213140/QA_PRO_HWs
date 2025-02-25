// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

// одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
// Умови виконання ДЗ

// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@Gmail.com"
    },
    {
        userName:"Test",
        lastName:"Test",
        email:".testtest@gmail.com"
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"testtest.@Gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii @mail.ru" // Нам такі не підходять
    },
];

const patternEmailCheck = /^\w{1,}\.?\w{1,}@(gmail|yahoo)\.\w{1,}/gi;

let filteredArray = []

for(const user of arr){
    if(patternEmailCheck.test(user.email)){
        filteredArray.push(user)
    }
}

console.log(filteredArray)

