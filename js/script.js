'use strict'


//1. Напишіть функцію, яка перевіряє, чи перші літери двох слів однакові. Функція має бути нечутливою до регістру.
// function isEqual(){
//     const firstWord = 'Привіт';
//     const secondWord = 'привіт';
//     if(firstWord[0].toLowerCase() === secondWord[0].toLowerCase()){
//         console.log(true);
//     }else console.log(false);
// }
// console.log(isEqual());

//2. Дано слово. Отримайте останню літеру. Якщо слово закінчується на м'який знак, отримайте передостанню літеру.
// const word = 'король';
// if(word[word.length - 1] === 'ь'){
//     console.log(word[word.length - 2]);
// }else console.log(word[word.length - 1]);

//3. Дано деякий рядок. Виведіть у консоль по черзі всі символи з кінця рядка.
// let str = 'Привіт світ';
// let reverse = str.split(' ').reverse().join(' ');
// for(const char of reverse){
//     console.log(char);
// }

//4. Напишіть функцію ucFirst(str), яка повертає рядок str з першим символом у верхньому регістрі, наприклад: ucFirst("василь") == "Василь". Слово вводиться користувачем. має бути перевірка на пустоту.
// function ucFirst(str){
//     if(!str) console.log('Рядок пустий');

//    return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst(prompt('Введіть слово:')));

//5. Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.
// Функція має бути нечутливою до регістру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str){
//     if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')){
//         console.log(true)
//     }else console.log(false);
// }
// console.log(checkSpam(prompt('Введіть рядок:')));

//6. Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.
// Результатом функції повинен бути урізаний (якщо потребується) рядок.
// Наприклад:
// truncate("Що я хотів би розповісти на цю тему:", 20) = "Що я хотів би розпо…"
// truncate("Всім привіт!", 20) = "Всім привіт!"

// function truncate(str, maxLength){
//     if(str.length > maxLength){
//         return str.slice(0, maxLength - 3) + '...'
//     }
//     return str;
// }
// console.log(truncate("Що я хотів би розповісти на цю тему:", 25));
// console.log(truncate('Всім привіт', 20));

//7. У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
// Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.
// Приклад:
// alert( extractCurrencyValue('$120') === 120 ); // true
// function extractCurrencyValue(str){
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));

//8. Змініть регістр букв рядка на протилежний. ʼAbCdE' -> 'aBcDe'

