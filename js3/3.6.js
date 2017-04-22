/**
 * Created by Max on 22.04.2017.
 * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 */
function pow(x,n) {
    if (n > 1){
        return (x * pow(x, n-1));
    }else {
        return x;
    }
}
console.log(pow(5,20));