/**
 * Created by Max on 26.04.2017.
 * Задание 2 (Проверка на СПАМ)
 * Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.
 checkSpam('get new Sex videos'); // true
 checkSpam('[SPAM] How to earn fast money?'); // true
 checkSpam('New PSD template'); // false
 */
function checkSpam(str) {
    str.toUpperCase();
    if(str.indexOf("SPAM")==1 || str.indexOf("SEX") == 1){
        return false;
    }else {
        return true;
    }
}
console.log(checkSpam('[SPAM] How to earn fast money?'));