/**
 * Created by Max on 17.04.2017.
 * Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'.
 Если посетитель вводит '2017', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2017!'.
 */
var answer = prompt("Какой сейчас год?");
if (answer == 2017){
    alert("Вы правы!");
}else{
    alert("С луны свалися? 2017!");
}