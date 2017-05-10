/**
 * Created by maxim on 02.05.17.
 *Задание 2 (Сортировка массива строк)

 Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.

 Исходный массив не должен меняться.

 var arr = [&#39;HTML&#39;, &#39;JavaScript&#39;, &#39;CSS&#39;];

 // ... ваш код ...

 console.log( arrSorted ); // CSS, HTML, JavaScript

 console.log( arr ); // HTML, JavaScript, CSS (без изменений)
 */
var arr = ['HTML', 'Javascript' , 'CSS'];
var arrSorted = arr.slice().sort();
console.log( arrSorted );
console.log( arr );