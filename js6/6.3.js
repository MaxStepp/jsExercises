/**
 * Created by Max on 04.05.2017.
 * Задание 3 (Random sort)

 Необходимо отсортировать массив в случайном порядке используя метод sort.

 var arr = [1, 2, 3, 4, 5];

 arr.sort(ваша функция);
 */
var arr = [1, 2, 3, 4, 5];

function personalSort(a, b) {
    return Math.random() - 0.5;
}
arr.sort(personalSort);
console.log(arr);

