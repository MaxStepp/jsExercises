/**
 * Created by maxim on 02.05.17.
 * Задание 3 (Калькулятор)
 Напишите код, который:
 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен.
 */
var userAnswer, numArr = [], sum = 0;
while (true){
    userAnswer = prompt("Enter your number: ", "");
    if (userAnswer === null || userAnswer === '' || isNaN(userAnswer) ){
        break;
    }else {
        numArr.push(parseInt(userAnswer));
    }
}
console.log(numArr);
for(var i = 0; i < numArr.length; i ++){
    sum += numArr[i];
}
console.log(numArr, sum);