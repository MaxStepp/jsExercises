/**
 * Created by Max on 10.05.2017.
 * Задание 5 (Проверка на палиндром)
 Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
 Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
 console.log(isPal('Anna')); // true
 console.log(isPal('А роза упала на лапу Азора')); //true
 console.log(isPal('Вася')); //false
 console.log(isPal('12321')); //true
 console.log(isPal('123212')); //false

 */
function isPal(word) {
    var origin = word.toUpperCase().replace(/\s/g,'');
    var flipWord = '';
    for (var i = origin.length-1 ; i >= 0; i--){
        flipWord += origin[i];
    }
    console.log(flipWord);
    if(origin == flipWord){
        return true;
    }else{
        return false;
    }
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false