/**
 * Created by Max on 17.04.2017.
 * Напишите код, который будет запрашивать логин пользователя (prompt).Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
 Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.
 */
var answer = prompt('Your login: ', '');
if (answer == 'admin'){
    var yourPass = prompt('Your password', '');
    if (yourPass == 'passw0rd'){
        alert('Welcome home! ' + yourPass);
    }else if (yourPass == null){
        alert('Canceled ' + yourPass);
    }else {
        alert('Wrong password ' + yourPass);
    }
}else if(answer == null){
    alert('Canceled');
}else{
    alert('Access denied');
}